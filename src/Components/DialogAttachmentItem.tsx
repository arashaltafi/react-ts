import { Button } from "@material-ui/core";

type DialogAttachmentItemProps = {
  icon: any;
  text: string;
  handleClick?: () => void;
};

const DialogAttachmentItem = ({
  icon,
  text,
  handleClick,
}: DialogAttachmentItemProps) => {
  return (
    <Button className="w-full" onClick={() => handleClick?.()}>
      <div className="w-full flex !flex-col items-center justify-center">
        <div className="w-[58px] h-[58px] border border-[#517DA2] text-[#517DA2] flex items-center justify-center rounded-full bg-gray-50">
          {icon}
        </div>
        <p className="mt-3 text-[13px] font-medium">{text}</p>
      </div>
    </Button>
  );
};
export default DialogAttachmentItem;
