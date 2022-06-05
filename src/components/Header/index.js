import React from 'react'
import styled from 'styled-components'
import Color from 'color'
import NoSelectOption from 'components/NoSelectOption'
import Typography from 'components/Typography'
import SearchBox from 'components/SearchBox'
import Box from 'components/Box'
import Container from 'components/Container'
import Select from 'components/Select'
import { MeilisearchLogo, Indexes } from 'components/icons'
import HelpCenter from './HelpCenter'

const HeaderWrapper = styled.div`
  background-color: white;
  display: flex;
  position: sticky;
  top: 0;
  height: 120px;
  box-shadow: 0px 0px 30px ${(p) => Color(p.theme.colors.gray[0]).alpha(0.15)};
  z-index: 3;
`

const Header = ({
  indexes,
  currentIndex,
  setCurrentIndex,
  refreshIndexes,
  client,
}) => {
  const [version, setVersion] = React.useState()
  React.useEffect(async () => {
    try {
      const res = await client.getVersion()
      setVersion(res.pkgVersion)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }, [client])

  return (
    <HeaderWrapper>
      <Container
        p={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* Trick to make the logo look centered */}
          <MeilisearchLogo
            title="Meilisearch"
            style={{
              width: 75,
              paddingTop: 11,
              paddingBottom: 11,
              marginLeft: 13,
            }}
          />
          {version && (
            <Typography
              variant="typo10"
              color="gray.0"
              style={{ textTransform: 'unset' }}
            >{`v${version}`}</Typography>
          )}
        </Box>
        <Box display="flex">
          <SearchBox />
          <Select
            options={indexes}
            icon={<Indexes style={{ height: 22 }} />}
            currentOption={currentIndex}
            onChange={setCurrentIndex}
            noOptionComponent={<NoSelectOption />}
            style={{ width: 216 }}
            onClick={refreshIndexes}
          />
        </Box>
        <HelpCenter />
      </Container>
    </HeaderWrapper>
  )
}

export default Header
