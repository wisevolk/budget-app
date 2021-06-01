// jest.mock("uuid", () => {
//     return {
//         v4: jest.fn(() => 1)
//     }
// })

const { v4 } = jest.requireActual("uuid");

export default () => {
    return v4.NIL;
};
