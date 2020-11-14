import React from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';

import styled from 'styled-components/native';
import { apiImage } from '../../api';
import Link from '../../components/Detail/Link';
import Poster from '../../components/Poster';
import ScrollContainer from '../../components/ScrollContainer';
import Votes from '../../components/Votes';
import { formatDate } from '../../utils';

const Header = styled.View`
  height: ${Dimensions.get('window').height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 40px;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 50px;
`;

const Data = styled.View`
  padding: 0px 30px;
  margin-top: 30px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ openBrwoser, loading, result }) => {
  return (
    <ScrollContainer loading={false} contentContainerStyle={{ paddingBottom: 60 }}>
      <>
        <Header>
          <BG source={{ uri: apiImage(result.backgroundImage, '-') }} />
          <Container>
            <Poster url={result.poster} />
            <Info>
              <Title>{result.title}</Title>
              {result.votes && <Votes votes={result.votes} />}
            </Info>
          </Container>
        </Header>
        <Data>
          {result.overview ? (
            <>
              <DataName>Overview</DataName>
              <DataValue>{result.overview}</DataValue>
            </>
          ) : null}
          {loading && <ActivityIndicator style={{ marginTop: 30 }} color="white" />}
          {result.spoken_languages ? (
            <>
              <DataName>Languages</DataName>
              <DataValue>{result.spoken_languages.map((l) => `${l.name} `)}</DataValue>
            </>
          ) : null}
          {result.release_date ? (
            <>
              <DataName>Release Date</DataName>
              <DataValue>{formatDate(result.release_date)}</DataValue>
            </>
          ) : null}
          {result.status ? (
            <>
              <DataName>Status</DataName>
              <DataValue>{result.status}</DataValue>
            </>
          ) : null}
          {result.runtime ? (
            <>
              <DataName>Run Time</DataName>
              <DataValue>{result.runtime} minutes</DataValue>
            </>
          ) : null}
          {result.first_air_date ? (
            <>
              <DataName>First Air Date</DataName>
              <DataValue>{formatDate(result.first_air_date)}</DataValue>
            </>
          ) : null}
          {result.genres ? (
            <>
              <DataName>Genres</DataName>
              <DataValue>
                {result.genres.map((g, index) =>
                  index === result.genres.length - 1 ? g.name : `${g.name},  `
                )}
              </DataValue>
            </>
          ) : null}
          {result.number_of_episodes && result.number_of_seasons ? (
            <>
              <DataName>Seasons / Episodes</DataName>
              <DataValue>
                {result.number_of_seasons} / {result.number_of_episodes}
              </DataValue>
            </>
          ) : null}
          {result.imdb_id ? (
            <>
              <DataName>Links</DataName>
              <Link
                onPress={() => openBrwoser(`https://www.imdb.com/title/${result.imdb_id}`)}
                text="IMDB Page"
                icon="imdb"
              />
            </>
          ) : null}
          {result.videos.results?.length > 0 ? (
            <>
              <DataName>Videos</DataName>
              {result.videos.results.map((video) => (
                <Link
                  text={video.name}
                  key={video.id}
                  icon="youtube-play"
                  onPress={() => openBrwoser(`https://www.youtube.com/watch?v=${video.key}`)}
                />
              ))}
            </>
          ) : null}
        </Data>
      </>
    </ScrollContainer>
  );
};
