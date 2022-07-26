export const isPositionEqual = (
  referencesLily: any[],
  referencesFrog: any[]
) => {
  for (var j = 0; j < referencesLily.length; j++) {
    if (
      referencesLily[j].getBoundingClientRect().y !==
        referencesFrog[j].getBoundingClientRect().y ||
      referencesLily[j].getBoundingClientRect().x !==
        referencesFrog[j].getBoundingClientRect().x
    ) {
      return false;
    }
  }
  return true;
};
