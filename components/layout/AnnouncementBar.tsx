interface AnnouncementBarProps {
  message?: string;
}


export default function AnnouncementBar({
  message = "Welcome to the official website of FSV Berghausen 1928",
}: AnnouncementBarProps) {

  return (
    <div className="bg-blue-700 px-6 py-3 text-center text-sm font-medium text-white">

      <p>
        {message}
      </p>

    </div>
  );
}