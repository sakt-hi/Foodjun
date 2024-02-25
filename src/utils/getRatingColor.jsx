export const getRatingColor = (avgRating) => {
    let color;
    switch (true) {
      case avgRating > 4:
        color = "green";
        break;
      case avgRating >= 2.5 && avgRating <= 4:
        color = "orange";
        break;
      default:
        color = "red";
    }
    return color;
};