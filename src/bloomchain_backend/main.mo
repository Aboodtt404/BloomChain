import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Result "mo:base/Result";

actor BloomChainBackend {
    
    public type Message = {
        id: Nat;
        content: Text;
        author: Principal;
        timestamp: Int;
    };

    public type UserProfile = {
        principal: Principal;
        username: ?Text;
        email: ?Text;
        joinedAt: Int;
    };

    private stable var messageIdCounter: Nat = 0;
    private stable var messages: [Message] = [];
    private stable var users: [UserProfile] = [];
    public query func greet(name: Text): async Text {
        "Hello, " # name # "! Welcome to BloomChain!"
    };

    public query func getCanisterInfo(): async {name: Text; version: Text} {
        {
            name = "BloomChain Backend";
            version = "1.0.0";
        }
    };

    public shared(msg) func createOrUpdateProfile(username: ?Text, email: ?Text): async Result.Result<UserProfile, Text> {
        let caller = msg.caller;
        
        if (Principal.isAnonymous(caller)) {
            return #err("Anonymous users cannot create profiles");
        };

        let profile: UserProfile = {
            principal = caller;
            username = username;
            email = email;
            joinedAt = Time.now();
        };

        users := Array.append(users, [profile]);
        #ok(profile)
    };

    public query func getProfile(userPrincipal: Principal): async ?UserProfile {
        Array.find<UserProfile>(users, func(user: UserProfile): Bool {
            Principal.equal(user.principal, userPrincipal)
        })
    };

    public shared(msg) func getMyProfile(): async ?UserProfile {
        let caller = msg.caller;
        Array.find<UserProfile>(users, func(user: UserProfile): Bool {
            Principal.equal(user.principal, caller)
        })
    };

    public shared(msg) func submitMessage(content: Text): async Result.Result<Message, Text> {
        let caller = msg.caller;
        
        if (Principal.isAnonymous(caller)) {
            return #err("Anonymous users cannot submit messages");
        };

        if (content.size() == 0) {
            return #err("Message content cannot be empty");
        };

        if (content.size() > 1000) {
            return #err("Message content too long (max 1000 characters)");
        };

        messageIdCounter += 1;
        let message: Message = {
            id = messageIdCounter;
            content = content;
            author = caller;
            timestamp = Time.now();
        };

        messages := Array.append(messages, [message]);
        #ok(message)
    };

    public query func getMessages(limit: ?Nat): async [Message] {
        let limitValue = switch(limit) {
            case (?l) { if (l > 100) 100 else l };
            case null { 10 };
        };
        
        let messageCount = messages.size();
        if (messageCount <= limitValue) {
            messages
        } else {
            let startIndex: Nat = if (messageCount >= limitValue) { 
                messageCount - limitValue 
            } else { 
                0 
            };
            Array.subArray(messages, startIndex, limitValue)
        }
    };

    public query func getMessageCount(): async Nat {
        messages.size()
    };

    public shared(msg) func whoami(): async Principal {
        msg.caller
    };

    public query func isAuthenticated(userPrincipal: Principal): async Bool {
        not Principal.isAnonymous(userPrincipal)
    };
} 