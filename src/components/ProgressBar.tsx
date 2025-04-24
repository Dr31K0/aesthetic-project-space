
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

const ProgressBar = ({ currentStep, totalSteps, labels }: ProgressBarProps) => {
  return (
    <div className="fixed bottom-20 left-0 right-0 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center gap-2 px-4">
        {labels.map((label, index) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${index < currentStep ? 'bg-white' : 'bg-white/20'}`} />
            <span className={`text-sm ${index < currentStep ? 'text-white' : 'text-white/40'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
