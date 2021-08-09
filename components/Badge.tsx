export default function Badge({ badgeTitle }: BadgeProps) {
  return (
    <>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        {badgeTitle}
      </span>
    </>
  );
}

interface BadgeProps {
  badgeTitle: string;
}