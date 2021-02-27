# React Grid

## Installation

```bash
#Yarn
yarn add @nathansearles/react-grid

#NPM
npm install @nathansearles/react-grid
```

## Column props

| Prop       | Description                   | Value                   |
| ---------- | ----------------------------- | ----------------------- |
| `columns`  | Define columns by breakpoint  | `string:string\|number` |
| `offsets`  | Define offsets by breakpoint  | `string:number`         |
| `ordering` | Define ordering by breakpoint | `string:number`         |

<details>

<summary><b>Column usage</b></summary>

**Columns**

Values: `1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'`

```jsx
<Column columns={{ xs: 12, md: 10, xl: 8 }}>Lorem ipsum...</Column>
```

**Offsets**

Values: `1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12`

```jsx
<Column offsets={{ xs: 1, md: 2, xl: 4 }}>Lorem ipsum...</Column>
```

**Ordering**

Values: any number

```jsx
<Column ordering={{ xs: 1, md: 2, xl: 1 }}>Lorem ipsum...</Column>
```

</details>

## Row props

| Prop      | Description                                | Value           |
| --------- | ------------------------------------------ | --------------- |
| `justify` | Define justification by breakpoint         | `string:string` |
| `align`   | Define alignment by breakpoint             | `string:string` |
| `spacing` | Define gutter spacing \* 8px by breakpoint | `string:number` |

<details>

<summary><b>Column usage</b></summary>

**Justify**

Values: `'normal' | 'start' | 'center' | 'end'`

```jsx
<Row justify={{ xs: 'center', md: 'start', xl: 'end' }}>Lorem ipsum...</Row>
```

**Align**

Values: `'normal' | 'start' | 'center' | 'end'`

```jsx
<Row align={{ xs: 'center', md: 'start', xl: 'end' }}>Lorem ipsum...</Row>
```

**Spacing**

Values: `0 | 1 | 2 | 3 | 4`

```jsx
<Row align={{ xs: 'center', md: 'start', xl: 'end' }}>Lorem ipsum...</Row>
```

</details>

## Simple example

```jsx
import { Container, Row, Column } from '@nathansearles/react-grid';

function App() {
  return (
    <Container>
      <Row>
        <Column columns={{ xs: 12, md: 10, lg: 8 }}>
          <h2>Lorem ipsum dolor sit amet...</h2>
        </Column>
      </Row>
    </Container>
  );
}
```
