export interface I1 {
    prop1: string;
    props2: string;
}

export interface I2 {
    prop3: number;
    props4: number;
}

type Union = I1 & I2 & { name: string };

function asd(x: Union) {

}


