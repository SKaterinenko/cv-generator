'use client';

import React from 'react';
import {
  Page, Text, View, Document, Image, StyleSheet, Font,
} from '@react-pdf/renderer';
import { Input } from '@/shared/Input';
import { ResumeType } from '@/shared/Types/generalTypes';

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
  },
  body: {
    padding: 35,
    width: '100%',
  },
  section: {
    maxHeight: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#4d4dfd',
  },
  titleText: {
    fontSize: 17,
    color: '#ffffff',
  },
  header: {
    padding: 20,
  },
  jobText: {
    fontSize: 15,
    color: '#ffffff',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  subtitleText: {
    fontSize: 10,
    color: '#ffffff',
  },
  image: { width: 100, height: 100 },
  jobs: {
    marginTop: 20,
  },

  job: {
    marginBottom: 10,
  },
  jobHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type MainProps = {
  data: ResumeType
};

export const Resume:React.FC<MainProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Input />
      <View style={styles.section}>
        {data?.image
              && (
              <Image
                style={styles.image}
                src={data.image}
              />
              )}
        <View style={styles.header}>
          <View style={styles.flex}>
            <Text style={styles.titleText}>{`${data.name || 'Имя'}`}</Text>
            <Text style={styles.titleText}>{`${data.lastName || 'Фамилия'}`}</Text>
          </View>
          <Text style={styles.jobText}>{data.job}</Text>
          <View style={styles.flex}>
            <Text style={styles.subtitleText}>
              {data.mail}
            </Text>
            <Text style={styles.subtitleText}>
              {data.phone}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        {data.about
            && (
            <>
              <Text style={[styles.titleText, { color: 'black' }]}>О себе</Text>
              <Text style={[styles.subtitleText, { color: 'black' }]}>
                {data.about}
              </Text>
            </>
            )}
        <View style={styles.jobs}>
          {data.jobs.map(({ titleJob, cityJob, descriptionJob }) => (
            <View style={styles.job} key={Math.random()}>
              <View style={styles.jobHeader}>
                <Text style={[styles.subtitleText, { color: 'black' }]}>
                  {titleJob}
                </Text>
                <Text style={[styles.subtitleText, { color: 'black' }]}>
                  {cityJob}
                </Text>
              </View>
              <Text style={[styles.subtitleText, { color: 'black' }]}>
                {descriptionJob}
              </Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.subtitleText}>
            {data.phone}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);
