import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function DiaryDetailModal({ visible, onClose, entry }) {
  if (!entry) return null;

  const { title, date, body, preview, moodImage } = entry;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {moodImage ? (
            <Image
              source={moodImage}
              style={styles.hero}
              resizeMode="cover"
            />
          ) : (
            <View style={[styles.hero, styles.imagePlaceholder]}>
              <Text style={styles.placeholderText}>
                Foto tidak tersedia
              </Text>
            </View>
          )}

          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.date}>{date}</Text>

            <Text style={styles.body}>
              {body || preview || 'Tidak ada cerita.'}
            </Text>

            <Pressable
              onPress={onClose}
              style={styles.button}
              accessibilityRole="button"
              accessibilityLabel="Tutup detail diary"
            >
              <Text style={styles.buttonText}>Tutup</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: SPACE.l,
  },
  hero: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#dddddd',
    borderBottomLeftRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
  },
  imagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: COLORS.muted,
  },
  content: {
    padding: SPACE.l,
    gap: SPACE.s,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },
  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginBottom: SPACE.s,
  },
  body: {
    fontSize: TYPO.body,
    color: COLORS.text,
    lineHeight: 20,
  },
  button: {
    marginTop: SPACE.l,
    padding: SPACE.m,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});