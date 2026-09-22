import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Qazaqstan Heritage app:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-[#FFFDF9] text-slate-900 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-amber-200 shadow-xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-[#E67E00] flex items-center justify-center mx-auto text-3xl font-serif">
              🏛️
            </div>
            <h1 className="text-2xl font-serif font-bold text-slate-900">
              Qazaqstan Heritage
            </h1>
            <p className="text-sm text-slate-600">
              Сайтты жүктеу кезінде күтпеген қате орын алды. Бетті қайта жаңартып көріңіз.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="w-full py-3 px-4 rounded-xl bg-[#E67E00] hover:bg-[#C86D00] text-white font-semibold transition cursor-pointer shadow-md shadow-amber-500/20"
              >
                Бетті қайта жаңарту (Жүктеу)
              </button>
              <button
                type="button"
                onClick={() => {
                  try {
                    localStorage.clear();
                  } catch (e) {
                    /* ignore */
                  }
                  window.location.href = window.location.pathname;
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition cursor-pointer"
              >
                Кэшті тазартып қайта ашу
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
