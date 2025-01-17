import { Component, ReactNode, ErrorInfo } from 'react';

// Define props and state interfaces
interface ErrorBoundaryProps {
  children: ReactNode; // Expecting ReactNode as children
}

interface ErrorBoundaryState {
  hasError: boolean; // Track if an error has occurred
  blockedError: boolean; // Track if the specific blocked error occurred
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, blockedError: false }; // Initialize state
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state to show a generic error
    return { hasError: true, blockedError: false };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Error logged:', error, info);

    // Check if the specific error is related to the blocked fingerprint icon
    if (error.message.includes('ERR_BLOCKED_BY_CLIENT') && error.message.includes('lucide-react/dist/esm/icons/fingerprint.js')) {
      this.setState({ blockedError: true });
    }
  }

  render() {
    const { hasError, blockedError } = this.state;

    if (blockedError) {
      // Custom fallback for the specific blocked error
      return (
        <div className="error-message">
          The fingerprint icon could not load. This might be caused by an ad blocker. Please consider disabling it for the best experience.
        </div>
      );
    }

    if (hasError) {
      // Generic fallback UI for other errors
      return (
        <div className="error-message">
          Something went wrong. Please refresh the page or contact support.
        </div>
      );
    }

    // Render children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
