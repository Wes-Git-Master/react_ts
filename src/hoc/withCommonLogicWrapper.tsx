import {FC} from "react";

export const withCommonLogicWrapper = (Component: FC) => {


    const WrapperComponent = (props: any) => {
        const x = 'block with common logic'

        return (
            <div>
                <h2>{x}</h2>
                <Component {...props}/>
                <h3>block with common logic 2</h3>

            </div>
        )
    }


    return WrapperComponent
}
