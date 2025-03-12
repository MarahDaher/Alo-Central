import { FunctionComponent } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

interface IconButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  label,
  className,
  onClick,
}) => {
  const { t } = useTranslation();

  // Function to handle the click event
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={handleOnClick}
      className={className}
    >
      {t(label)}
    </Button>
  );
};

export default IconButton;
