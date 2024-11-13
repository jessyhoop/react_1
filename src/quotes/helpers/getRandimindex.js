export const getRandimindex = () => {
    let random = Math.random();
    random *= 29;
    random = Math.floor(random) + 1;
    return random;
}