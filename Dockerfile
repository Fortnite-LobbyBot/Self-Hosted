# Builder
FROM docker.io/oven/bun:latest AS builder
WORKDIR /build/

ENV NODE_ENV=production

COPY bun.lock package.json ./

RUN bun install --production --frozen-lockfile --ignore-scripts

COPY . .

RUN bun run build:standalone

# Runner
FROM gcr.io/distroless/base-nossl-debian12:nonroot AS runner

COPY --from=builder /build/dist/selfhosted ./


CMD ["./selfhosted"]
