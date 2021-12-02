import { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

import {
  SearchStack,
  SearchInput,
  SearchButton
} from './styles'

type Props = {
  isLoading: boolean
  onSubmit: (query: string) => void
}

const SearchInputField = (props: Props) => {
  const [input, setInput] = useState('')

  return (
    <SearchStack spacing={1} direction='row'>
      <SearchInput
        label="Procurar por pessoas"
        variant="standard"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={k => k.key === 'Enter' && props.onSubmit(input)}
        disabled={props.isLoading}
      />
      <SearchButton
        variant="outlined"
        disabled={props.isLoading}
        onClick={() => props.onSubmit(input)}>
        <SearchOutlinedIcon/>
      </SearchButton>
    </SearchStack>
  )
}

export default SearchInputField
