import { Button } from '@mui/material'
import './styles.scss'

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resetErrorBoundary: any
}) {
  return (
    <>
      <div className="ErrorBoundary">
        <h3>Something went wrong:</h3>
        <pre>{error.message}</pre>
        <Button onClick={resetErrorBoundary} variant="outlined">
          Try again
        </Button>
        <a href="/">Home</a>
      </div>
    </>
  )
}
