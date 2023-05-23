const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const config = { i18n, output: 'standalone' };

module.exports = withBundleAnalyzer(config);
