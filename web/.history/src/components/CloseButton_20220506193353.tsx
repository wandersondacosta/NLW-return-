import { Popover } from "@headlessui/react";

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="fechar formulário de feedback"
    ></Popover.Button>
  );
}
