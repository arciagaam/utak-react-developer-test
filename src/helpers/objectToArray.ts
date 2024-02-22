type TObject<T> = {
    [key: string]: T
}

export const objectToArray = <T>(object: TObject<T>) => {
    const returnArray: T[] = [];

    for(const key in object) {
        returnArray.push({
            ...(object[key as string]),
            id: key
        });
    }

    return returnArray;
}