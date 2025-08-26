import React, { useEffect, useRef, useState } from 'react'
import { Play, Pause, RotateCcw, Maximize2, Minimize2 } from 'lucide-react'

interface UnityGameProps {
  className?: string
}

const UnityGame: React.FC<UnityGameProps> = ({ className = '' }) => {
  const gameContainerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [unityInstance, setUnityInstance] = useState<any>(null)

  useEffect(() => {
    // Load Unity game when component mounts
    loadUnityGame()

    // Cleanup when component unmounts
    return () => {
      if (unityInstance) {
        unityInstance.Quit()
      }
    }
  }, [])

  const loadUnityGame = async () => {
    try {
      setIsLoading(true)
      setProgress(0)

      // Create Unity container
      const container = document.createElement('div')
      container.id = 'unity-container'
      container.className = 'unity-desktop'

      // Create Unity canvas
      const canvas = document.createElement('canvas')
      canvas.id = 'unity-canvas'
      canvas.width = 960
      canvas.height = 600

      // Create loading bar
      const loadingBar = document.createElement('div')
      loadingBar.id = 'unity-loading-bar'
      loadingBar.style.display = 'block'

      // Create progress bar elements
      const progressBarEmpty = document.createElement('div')
      progressBarEmpty.id = 'unity-progress-bar-empty'
      progressBarEmpty.style.background = 'url(/game/TemplateData/progress-bar-empty-dark.png) no-repeat center'
      progressBarEmpty.style.width = '141px'
      progressBarEmpty.style.height = '18px'
      progressBarEmpty.style.marginTop = '10px'
      progressBarEmpty.style.marginLeft = '6.5px'

      const progressBarFull = document.createElement('div')
      progressBarFull.id = 'unity-progress-bar-full'
      progressBarFull.style.background = 'url(/game/TemplateData/progress-bar-full-dark.png) no-repeat center'
      progressBarFull.style.width = '0%'
      progressBarFull.style.height = '18px'
      progressBarFull.style.marginTop = '10px'

      // Create Unity logo
      const logo = document.createElement('div')
      logo.id = 'unity-logo'
      logo.style.background = 'url(/game/TemplateData/unity-logo-dark.png) no-repeat center'
      logo.style.width = '154px'
      logo.style.height = '130px'

      // Create footer
      const footer = document.createElement('div')
      footer.id = 'unity-footer'

      const logoTitle = document.createElement('div')
      logoTitle.id = 'unity-logo-title-footer'
      logoTitle.style.background = 'url(/game/TemplateData/unity-logo-title-footer.png) no-repeat center'
      logoTitle.style.float = 'left'
      logoTitle.style.width = '102px'
      logoTitle.style.height = '38px'

      const buildTitle = document.createElement('div')
      buildTitle.id = 'unity-build-title'
      buildTitle.style.float = 'right'
      buildTitle.style.marginRight = '10px'
      buildTitle.style.lineHeight = '38px'
      buildTitle.style.fontFamily = 'arial'
      buildTitle.style.fontSize = '18px'
      buildTitle.style.color = '#ffffff'
      buildTitle.textContent = 'BloomChain Game'

      const fullscreenButton = document.createElement('div')
      fullscreenButton.id = 'unity-fullscreen-button'
      fullscreenButton.style.background = 'url(/game/TemplateData/fullscreen-button.png) no-repeat center'
      fullscreenButton.style.cursor = 'pointer'
      fullscreenButton.style.float = 'right'
      fullscreenButton.style.width = '38px'
      fullscreenButton.style.height = '38px'
      fullscreenButton.onclick = toggleFullscreen

      // Assemble the Unity container
      loadingBar.appendChild(logo)
      loadingBar.appendChild(progressBarEmpty)
      progressBarEmpty.appendChild(progressBarFull)

      footer.appendChild(logoTitle)
      footer.appendChild(buildTitle)
      footer.appendChild(fullscreenButton)

      container.appendChild(canvas)
      container.appendChild(loadingBar)
      container.appendChild(footer)

      if (gameContainerRef.current) {
        gameContainerRef.current.appendChild(container)
      }

      // Load Unity game
      const script = document.createElement('script')
      script.src = '/game/Build/BloomChain-build.loader.js'
      script.onload = () => {
        // @ts-ignore - Unity global function
        if (typeof createUnityInstance === 'function') {
          // @ts-ignore
          createUnityInstance(canvas, {
            dataUrl: '/game/Build/BloomChain-build.data',
            frameworkUrl: '/game/Build/BloomChain-build.framework.js',
            codeUrl: '/game/Build/BloomChain-build.wasm',
            companyName: 'BloomChain',
            productName: 'BloomChain Game',
            productVersion: '1.0',
            showBanner: false,
            onProgress: (progress: number) => {
              setProgress(progress)
              progressBarFull.style.width = `${progress * 100}%`
            }
          }).then((instance: any) => {
            setUnityInstance(instance)
            setIsLoading(false)
            setIsPlaying(true)
            loadingBar.style.display = 'none'

            // Set up Unity event listeners
            instance.on('initialized', () => {
              console.log('Unity game initialized')
            })

            instance.on('error', (error: any) => {
              console.error('Unity game error:', error)
            })
          }).catch((error: any) => {
            console.error('Failed to load Unity game:', error)
            setIsLoading(false)
          })
        }
      }

      document.head.appendChild(script)

    } catch (error) {
      console.error('Error loading Unity game:', error)
      setIsLoading(false)
    }
  }

  const togglePlayPause = () => {
    if (unityInstance) {
      if (isPlaying) {
        // Pause game logic here if Unity supports it
        setIsPlaying(false)
      } else {
        // Resume game logic here if Unity supports it
        setIsPlaying(true)
      }
    }
  }

  const restartGame = () => {
    if (unityInstance) {
      // Restart game logic here if Unity supports it
      setIsPlaying(true)
    }
  }

  const toggleFullscreen = () => {
    if (gameContainerRef.current) {
      if (!isFullscreen) {
        if (gameContainerRef.current.requestFullscreen) {
          gameContainerRef.current.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Game Container */}
      <div
        ref={gameContainerRef}
        className="relative w-full max-w-6xl mx-auto bg-gray-900 rounded-2xl overflow-hidden border border-green-700/50"
        style={{ minHeight: '600px' }}
      >
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-900/90 flex flex-col items-center justify-center z-50">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-300 mb-2">Loading BloomChain Game</h3>
                <p className="text-gray-400 mb-4">Preparing your Web3 gardening experience</p>

                {/* Progress Bar */}
                <div className="w-80 bg-gray-700 rounded-full h-3 mx-auto">
                  <div
                    className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progress * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  {Math.round(progress * 100)}% Loaded
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Game Controls Overlay */}
        {!isLoading && (
          <div className="absolute top-4 right-4 flex gap-2 z-40">
            <button
              onClick={togglePlayPause}
              className="p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors duration-200"
              title={isPlaying ? 'Pause Game' : 'Play Game'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>

            <button
              onClick={restartGame}
              className="p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors duration-200"
              title="Restart Game"
            >
              <RotateCcw className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors duration-200"
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-5 h-5 text-white" />
              ) : (
                <Maximize2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        )}

        {/* Game Instructions */}
        {!isLoading && (
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-sm text-gray-300 max-w-xs z-40">
            <div className="font-semibold text-green-300 mb-2">Game Controls</div>
            <div className="space-y-1 text-xs">
              <div>• Use WASD or Arrow Keys to move</div>
              <div>• Click to interact with objects</div>
              <div>• Space to jump (if applicable)</div>
              <div>• ESC to pause menu</div>
            </div>
          </div>
        )}
      </div>

      {/* Game Description */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-green-300 mb-4">
          Experience BloomChain
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Immerse yourself in the first Web3 gardening game where you truly own your digital garden.
          Plant magical crops, solve puzzles, and earn rewards in this innovative blockchain gaming experience.
        </p>
      </div>
    </div>
  )
}

export default UnityGame
