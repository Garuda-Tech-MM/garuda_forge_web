import { CheckCircleIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
function ContactSuccessMessage({
  visibleStatus = false,
}: {
  visibleStatus: boolean;
}) {
  const [visible, setVisible] = useState(visibleStatus);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    if (closing) {
      setVisible(false);
    }
  };

  if (!visible) return null;
  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={`fixed overflow-hidden top-28 right-3 z-50 flex items-center gap-5 bg-gray-50 text-gray-900 p-5 rounded-xl shadow-lg border-l-4 border-[#625FFC] ${
        closing ? "animate-toast-slide-out" : ""
      }`}
    >
      <div className="bg-[#625FFC10] w-16 h-16 flex justify-center items-center rounded-full">
        <CheckCircleIcon className="text-[#625FFC]" width={32} height={32} />
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-sm md:text-base">
            Message Sent Successfully
          </h4>
          <XIcon
            className="text-gray-700 hover:text-red-500 hover:cursor-pointer self-start mb-2"
            width={20}
            height={20}
            onClick={() => setClosing(true)}
          />
        </div>
        <p className="text-gray-500 text-xs md:text-sm">
          Our team has received your message and will get back to you within 24
          hours.
        </p>
      </div>
    </div>
  );
}

export default ContactSuccessMessage;
