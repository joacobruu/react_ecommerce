import SendIcon from '@material-ui/icons/Send';
import { styled } from '@material-ui/styles';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  
`

const Description = styled.div`
  
`

const InputContainer = styled.div`
  
`

const Input = styled.input`
  
`

const Button = styled.button`
  
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timly updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your email...'/>
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
