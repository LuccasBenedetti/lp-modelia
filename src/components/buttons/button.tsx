interface buttonProps {
  title: string;
  className?: string;
}

export function Button({ title, className }: buttonProps) {
  return (
    <button
      className={`bg-gradient-to-r from-[#ce7887] to-[#6d41e2] text-white font-bold py-2 px-4 rounded-sm ${className}`}
    >
      {title}
    </button>
  );
}
