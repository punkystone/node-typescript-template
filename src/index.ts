import { test } from "./test";

const main = async (): Promise<void> => {
    const testResult: string = test();
    console.log(testResult);
};
main();
