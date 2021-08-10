export default function Badge({
  badgeTitle,
  textSize = "text-xs",
}: BadgeProps) {
  return (
    <>
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full ${textSize} font-medium bg-blue-100 text-blue-800`}
      >
        {badgeTitle}
      </span>
    </>
  );
}

interface BadgeProps {
  badgeTitle: string;
  textSize?: string;
}
