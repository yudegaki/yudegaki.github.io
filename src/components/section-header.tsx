type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export const SectionHeader = ({
  badge,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-800">
          {badge}
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
