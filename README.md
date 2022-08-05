# React SafeComponent


Wrap React Component class, restrict visibility by mount state



## Installation

Using npm:

```
npm install --save @react4tv/react-safe-component
```

or using yarn:

```
yarn add @react4tv/react-safe-component
```

## Usage

Gets the application instance ID.

#### Examples

```typescript
import { SafeComponent } from '@react4tv/react-safe-component';

class Example extends SafeComponent<{},{}>{
    _componentDidMount(){
        // Use like setState
        this.setStateSafe({})
    }
    _componentWillUnmount(){
        //...
    }
    renderContent(): React.ReactNode {
        return <div />
    }
}
```

