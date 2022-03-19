export default function getWindowDimensions() {
  if (typeof window !== undefined) {
    const {innerWidth: width, innerHeight: height} = window;
    return {
      width,
      height,
    };
  } else {
    undefined;
  }
}
