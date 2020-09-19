export function useLocalStorage(key: string) {
  const get = () => {
    return localStorage.getItem(key) as any;
  };

  const set = (value: any) => {
    return localStorage.setItem(key, value);
  };

  return {
    get,
    set
  };
}
