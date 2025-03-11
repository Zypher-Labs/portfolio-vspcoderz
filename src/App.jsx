import { useState, useEffect } from 'react'
import { Desktop } from './components/Desktop'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background">
          <div className="text-4xl font-bold mb-4">Coderz OS</div>
          <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out"
              style={{ width: '100%' }}
            />
          </div>
          <div className="mt-2 text-muted-foreground">Coding...</div>
        </div>
      ) : (
        <Desktop />
      )}
    </>
  )
}

export default App
