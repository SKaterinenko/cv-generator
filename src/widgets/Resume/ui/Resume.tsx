'use client';

import React from 'react';
import {
  Page, Text, View, Document, StyleSheet, Font,
} from '@react-pdf/renderer';
import { Input } from '@/shared/Input';

Font.register({
  family: 'Roboto',
  src:
        'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  section: {
    maxHeight: 100,
    padding: 20,
    width: '100%',
    backgroundColor: '#4d4dfd',
  },
  title: {
    marginLeft: 5,
    fontSize: 17,
    color: '#ffffff',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  subtitle: {
    marginTop: 20,
    marginLeft: 5,
    fontSize: 13,
    color: '#ffffff',
  },
});

type MainProps = {
  data: {
    name: string
    lastName: string
    mail: string
    phone: string
  }
};

export const Resume:React.FC<MainProps> = ({ data }) => {
  console.log(data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Input />
        <View style={styles.section}>
          <View style={styles.flex}>
            <Text style={styles.title}>{`${data.name || 'Имя'}`}</Text>
            <Text style={styles.title}>{`${data.lastName || 'Фамилия'}`}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.subtitle}>
              {data.mail}
            </Text>
            <Text style={styles.subtitle}>
              {data.phone}
            </Text>
          </View>

        </View>
      </Page>
    </Document>
  );
};
