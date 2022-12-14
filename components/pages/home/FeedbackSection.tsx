import UserFeedbackForm from "../../forms/UserFeedbackForm";

export default function FeedBackSection() {
  return (
    <div className="flex flex-col md:grid items-center md:grid-cols-2 px-4 md:px-32 py-8 bg-gray-200">
      <div className="flex flex-col  md:px-32">
        <text className="text-xl md:text-5xl font-black text-teal-500">
          Help us improve our services
        </text>
        <text className="text-base text-teal-500">
          Let us know what you think about our platform and help us become
          better
        </text>
      </div>
      <div>
        <UserFeedbackForm />
      </div>
    </div>
  );
}
