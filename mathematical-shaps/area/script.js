function findArea(firstSideLenght = 5, secondSideLenght = 6, thirdSideLenght = 7) {
    let semiPerimeter = (firstSideLenght + secondSideLenght + thirdSideLenght) / 2;
    let area = (Math.sqrt((semiPerimeter * (semiPerimeter - firstSideLenght) * (semiPerimeter - secondSideLenght) * (semiPerimeter - thirdSideLenght))))
    return area;
}