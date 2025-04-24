
interface RainbowBarProps {
  className?: string;
}

export const RainbowBar = ({ className = "" }: RainbowBarProps) => {
  return (
    <div className={`h-1 bg-gradient-to-r from-[#FF1CF7] via-[#7F7FD5] to-[#00FFF0] ${className}`} />
  );
};
