export function convertEnumToDictionary(enumme: any) {
  return Object.keys(enumme)
    .map((i) => {
      const id = +enumme[i];

      return !isFinite(id)
        ? null
        : {
          id,
          name: enumme[id]
        };
    })
    .filter(Boolean);
}

export function convertEnumToArray(enumme: any): any[] {
  return Object.values(enumme);
}
