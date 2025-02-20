import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";

export type ModalProps = {
  title?: string;
  children?: React.ReactNode;
  open?: boolean;
  closeOnEsc?: boolean;
};

export const Modal = ({
  title = "",
  children,
  open = false,
  closeOnEsc = true,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={"fixed inset-0 z-10 overflow-y-auto"}
        onClose={() => {
          if (closeOnEsc) setIsOpen(false);
        }}
      >
        <div
          className={
            "flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
          }
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className={
                "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              }
            />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className={"hidden sm:inline-block sm:h-screen sm:align-middle"}
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={
                "inline-block transform overflow-hidden rounded-lg bg-white p-2 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
              }
            >
              <div
                className={"absolute top-0 right-0 hidden pt-4 pr-4 sm:block"}
              >
                {closeOnEsc && (
                  <button
                    type="button"
                    className={
                      "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={"sr-only"}>Close</span>
                    <XIcon className={"h-6 w-6"} aria-hidden="true" />
                  </button>
                )}
              </div>
              <div className={"sm:flex"}>
                <div className={"mt-3 w-full sm:mt-0"}>
                  <Dialog.Title
                    as="h3"
                    className={"text-lg font-medium leading-6 text-gray-900"}
                  >
                    {title}
                  </Dialog.Title>
                  <div className={"mt-2"}>{children}</div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
