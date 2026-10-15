import "./index.css";

type LoadingScreenProps = {
  label?: string;
};

export default function LoadingScreen({
  label = "Loading",
}: LoadingScreenProps) {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-screen__names">
        J<span className="loading-screen__amp">&</span>M
      </div>
      <div className="loading-screen__bar" aria-hidden="true">
        <span />
      </div>
      <span className="loading-screen__label">{label}</span>
    </div>
  );
}
