/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface FilestyleOption {
  input?: boolean;
  icon?: boolean;
  buttonText?: string;
  buttonName?: string;
  size?: string;
  iconName?: string;
  disabled?: boolean;
  buttonBefore?: boolean;
  badge?: boolean;
  placeholder?: string;
}

interface JQuery {
  filestyle(opts: FilestyleOption): JQuery;
  filestyle(method: string, flag?: boolean): JQuery;
}
