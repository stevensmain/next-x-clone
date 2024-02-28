import { Button } from "@nextui-org/react";
import { IconX } from "@tabler/icons-react";

interface ModalProps {
  isOpen?: boolean;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

export default function Modal({
  isOpen,
  title,
  body,
  actionLabel,
  footer,
  disabled,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
          {/*content*/}
          <div
            className="
            h-full
            lg:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-black 
            outline-none 
            focus:outline-none
            "
          >
            {/*header*/}
            <div
              className="
              flex 
              items-center 
              justify-between 
              p-10 
              rounded-t
              "
            >
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <Button
                color="default"
                isIconOnly
                variant="light"
                aria-label="Go back"
                radius="full"
              >
                <IconX className="w-6 h-6" />
              </Button>
            </div>
            {/*body*/}
            <div className="relative p-10 flex-auto">{body}</div>

            {/*footer*/}
            <div className="flex flex-col gap-2 p-10">
              <Button disabled={disabled} color="primary" fullWidth>
                {actionLabel}
              </Button>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
