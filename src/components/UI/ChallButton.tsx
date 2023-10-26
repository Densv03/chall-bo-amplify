import { ChallButtonThemeEnum } from '../../enums/UI/chall-button-theme.enum';

interface ChallButtonProps {
  buttonTheme: ChallButtonThemeEnum;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function getClassnameByTheme(theme: ChallButtonThemeEnum): string {
  switch (theme) {
    case ChallButtonThemeEnum.LIGHT_GRAY:
      return 'btn btn--light-gray';
    default:
      return '';
  }
}

function getClassName(theme: ChallButtonThemeEnum, classname?: string): string {
  if (!classname) {
    return getClassnameByTheme(theme);
  }
  return `${getClassnameByTheme(theme)} ${classname}`;
}
export const ChallButton: React.FC<ChallButtonProps> = ({
  buttonTheme,
  children,
  className,
    onClick,
}) => {
  return (
    <button className={getClassName(buttonTheme, className)} onClick={onClick}>{children}</button>
  );
};
