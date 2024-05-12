import React, {FC} from "react";

const withSomethingNew = (Component: FC) => {

    const WrapperComponent = (props: any) => {

        return (
            <div>
                <h2>some new feature</h2>
                <h2>some new feature</h2>
                <h2>some new feature</h2>
                <Component{...props}/>
                <h3>some new feature</h3>
                <h3>some new feature</h3>
                <h3>some new feature</h3>
                <h3>some new feature</h3>
            </div>
        )
    }
    return WrapperComponent

}

export default withSomethingNew;