import { RoadmapPhase } from "@/types";

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    id: 'phase-0',
    phaseNum: 0,
    filename: 'phase-0.sh',
    title: 'Phase 0: Foundations',
    timeEstimate: 'Months 1–2',
    accentColor: '#ff7b72',
    leadText: 'Master fundamental data structures, operating system mechanics, networking basics, and essential CLI tools.',
    items: [
      { id: 'p0_1', subhead: 'Data Structures & Algorithms', text: 'Core data structures: <code>Arrays</code>, <code>Linked Lists</code>, <code>Stacks</code>, <code>Queues</code>, and <code>Hash Tables</code>', resource: { label: 'VisuAlgo', url: 'https://visualgo.net/en' } },
      { id: 'p0_2', text: 'Non-linear structures: <code>Trees</code>, <code>Binary Search Trees</code>, and <code>Graphs</code> with <code>BFS</code> / <code>DFS</code> traversals' },
      { id: 'p0_3', text: 'Big-O notation: Analyze time & space complexity for algorithm optimizations', resource: { label: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com/' } },
      { id: 'p0_4', subhead: 'Operating Systems & POSIX', text: 'Process management: <code>Processes vs Threads</code>, context switching overhead, and concurrency models' },
      { id: 'p0_5', text: 'Linux CLI & POSIX utilities: <code>grep</code>, <code>sed</code>, <code>awk</code>, <code>find</code>, <code>htop</code>, and <code>lsof</code>' },
      { id: 'p0_6', text: 'File descriptors, system calls, memory layout (<code>Heap</code> vs <code>Stack</code>), and I/O multiplexing' },
      { id: 'p0_7', subhead: 'Networking Fundamentals', text: 'Networking models: <code>OSI 7-Layer</code> and <code>TCP/IP</code> stack protocols', resource: { label: 'OSI Model Guide', url: 'https://www.cloudflare.com/learning/network-layer/what-is-the-osi-model/' } },
      { id: 'p0_8', text: 'Transport protocols: <code>TCP 3-way handshake</code>, flow control vs low-latency <code>UDP</code> datagrams' },
      { id: 'p0_9', text: 'DNS resolution mechanics: <code>A</code>, <code>AAAA</code>, <code>CNAME</code>, <code>TXT</code> records, and TTL caching' },
      { id: 'p0_10', subhead: 'Systems Language Exposure & Version Control', text: 'Exposure to a compiled systems language (<code>C</code>, <code>C++</code>, or <code>Rust</code>) for memory awareness' },
      { id: 'p0_11', text: 'Git mastery: <code>rebase</code>, <code>bisect</code>, <code>cherry-pick</code>, and resolving merge conflicts', resource: { label: 'Git Docs', url: 'https://git-scm.com/doc' } }
    ]
  },
  {
    id: 'phase-1',
    phaseNum: 1,
    filename: 'phase-1.go',
    title: 'Phase 1: Core Language & Runtime',
    timeEstimate: 'Months 2–4',
    accentColor: '#d2a8ff',
    leadText: 'Deep-dive into a primary server-side language and master type safety, concurrency models, and runtime internals.',
    items: [
      { id: 'p1_1', subhead: 'Primary Ecosystem Choice', text: 'Select and master ONE core language: <code>Go</code>, <code>TypeScript (Node.js)</code>, <code>Rust</code>, or <code>Python</code>', resource: { label: 'Go Docs', url: 'https://go.dev/doc/' } },
      { id: 'p1_2', text: 'Type systems & safety: <code>Generics</code>, <code>Interfaces</code>, algebraic data types, and strict nullability' },
      { id: 'p1_3', subhead: 'Execution & Concurrency', text: 'Async runtime models: Node.js <code>Event Loop</code> vs Go <code>Goroutines</code> & channels vs Rust <code>tokio</code>', resource: { label: 'Node Event Loop', url: 'https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick' } },
      { id: 'p1_4', text: 'Concurrency vs Parallelism: <code>Mutexes</code>, atomic operations, race conditions, and worker threads' },
      { id: 'p1_5', text: 'Memory allocation & GC: Garbage collection pause tuning vs Rust compile-time <code>RAII</code>' },
      { id: 'p1_6', subhead: 'Tooling & Code Standards', text: 'Dependency management & lockfiles (<code>go.mod</code>, <code>package.json</code>, <code>Cargo.lock</code>)' },
      { id: 'p1_7', text: 'Static analysis, AST linters (<code>golangci-lint</code>, <code>eslint</code>, <code>clippy</code>), and formatter pipelines', resource: { label: 'ESLint Docs', url: 'https://eslint.org/' } }
    ]
  },
  {
    id: 'phase-2',
    phaseNum: 2,
    filename: 'phase-2.ts',
    title: 'Phase 2: Web Servers & APIs',
    timeEstimate: 'Months 4–6',
    accentColor: '#79c0ff',
    leadText: 'Architect robust HTTP/2/3 endpoints, GraphQL schemas, gRPC services, and contract-first API specs.',
    items: [
      { id: 'p2_1', subhead: 'HTTP & Server Fundamentals', text: 'Protocol specs: <code>HTTP/1.1</code>, <code>HTTP/2 multiplexing</code>, and <code>HTTP/3 (QUIC)</code>', resource: { label: 'HTTP/3 Overview', url: 'https://cloudflare-quic.com/' } },
      { id: 'p2_2', text: 'Implement a raw TCP/HTTP socket server once without high-level framework abstractions' },
      { id: 'p2_3', subhead: 'API Architecture Styles', text: 'RESTful API standards: Resource URI design, HTTP verbs, status codes, idempotency, and <code>HATEOAS</code>', resource: { label: 'RESTful Guide', url: 'https://restfulapi.net/' } },
      { id: 'p2_4', text: 'GraphQL ecosystem: Schemas, query resolvers, mutations, and solving the <code>N+1 Problem</code> with DataLoaders', resource: { label: 'GraphQL Docs', url: 'https://graphql.org/' } },
      { id: 'p2_5', text: 'High-performance RPC: <code>gRPC</code> with binary <code>Protocol Buffers</code> (Protobuf) interface definitions', resource: { label: 'gRPC Intro', url: 'https://grpc.io/docs/what-is-grpc/introduction/' } },
      { id: 'p2_6', subhead: 'Contracts & Real-time Protocols', text: 'OpenAPI 3.0 / Swagger specifications for automated SDK generation and documentation', resource: { label: 'OpenAPI Spec', url: 'https://spec.openapis.org/oas/latest.html' } },
      { id: 'p2_7', text: 'Framework deep-dive: Master one backend framework (<code>Express/Fastify</code>, <code>Gin/Fiber</code>, <code>FastAPI</code>, <code>Actix-Web</code>)' },
      { id: 'p2_8', text: 'Real-time bi-directional streaming: <code>WebSockets</code> vs <code>Server-Sent Events (SSE)</code>' }
    ]
  },
  {
    id: 'phase-3',
    phaseNum: 3,
    filename: 'phase-3.sql',
    title: 'Phase 3: Databases & SQL Mastery',
    timeEstimate: 'Months 6–9',
    accentColor: '#7ee787',
    leadText: 'Design relational schemas, optimize PostgreSQL queries with execution plans, and evaluate NoSQL consistency tradeoffs.',
    items: [
      { id: 'p3_1', subhead: 'Relational Database Engineering', text: 'PostgreSQL schema normalization (1NF-3NF), data types, foreign keys, and cascading rules', resource: { label: 'Postgres Docs', url: 'https://www.postgresql.org/docs/' } },
      { id: 'p3_2', text: 'Indexing strategies: <code>B-Tree</code>, <code>GIN</code>, <code>GiST</code>, composite indexes, and covering indexes' },
      { id: 'p3_3', text: 'Query optimization: Analyzing <code>EXPLAIN ANALYZE</code> output to eliminate expensive sequential scans', resource: { label: 'EXPLAIN Guide', url: 'https://www.postgresql.org/docs/current/using-explain.html' } },
      { id: 'p3_4', text: 'ACID guarantees & transaction isolation levels: <code>Read Committed</code>, <code>Repeatable Read</code>, <code>Serializable</code>' },
      { id: 'p3_5', text: 'Connection pooling (<code>PgBouncer</code>), connection limits, and deadlock prevention' },
      { id: 'p3_6', subhead: 'NoSQL & Data Modeling', text: 'Document stores (<code>MongoDB</code>), Key-Value (<code>Redis</code>), and Wide-Column (<code>Cassandra</code>) data models' },
      { id: 'p3_7', text: 'CAP Theorem & PACELC theorem: Evaluating Consistency vs Availability vs Latency under partitions', resource: { label: 'CAP Theorem', url: 'https://en.wikipedia.org/wiki/CAP_theorem' } },
      { id: 'p3_8', subhead: 'Data Access & Migrations', text: 'Write complex raw <code>SQL</code> queries and window functions before adopting ORMs' },
      { id: 'p3_9', text: 'Database migrations: Zero-downtime schema migrations (<code>Drizzle</code>, <code>Prisma</code>, <code>golang-migrate</code>)' }
    ]
  },
  {
    id: 'phase-4',
    phaseNum: 4,
    filename: 'phase-4.key',
    title: 'Phase 4: Security, Auth & Data Integrity',
    timeEstimate: 'Months 9–11',
    accentColor: '#ffa657',
    leadText: 'Implement stateless identity, OAuth authorization code flows, cryptographic key management, and OWASP defenses.',
    items: [
      { id: 'p4_1', subhead: 'Authentication & Identity', text: 'Session-based authentication vs stateless <code>JWTs</code> (signing, refresh token rotation, revocation strategies)', resource: { label: 'JWT.io Intro', url: 'https://jwt.io/introduction' } },
      { id: 'p4_2', text: 'OAuth 2.0 & OpenID Connect (<code>OIDC</code>): Authorization code flow with <code>PKCE</code> extension', resource: { label: 'OAuth 2.0 Spec', url: 'https://oauth.net/2/' } },
      { id: 'p4_3', text: 'Password hashing algorithms: <code>Argon2id</code>, <code>bcrypt</code>, salt/pepper, and cryptographic random generation' },
      { id: 'p4_4', subhead: 'Authorization Models', text: 'Enforce access control: <code>RBAC</code> (Role-Based) and <code>ABAC</code> (Attribute-Based) policy engines' },
      { id: 'p4_5', subhead: 'Vulnerability Mitigations', text: 'OWASP Top 10 defenses: Prevent <code>SQL Injection</code>, <code>XSS</code>, <code>CSRF</code>, <code>SSRF</code>, and <code>CORS</code> misconfigurations', resource: { label: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' } },
      { id: 'p4_6', text: 'Secrets management: <code>HashiCorp Vault</code>, AWS Secrets Manager, and environment variable isolation' },
      { id: 'p4_7', text: 'Transport security: <code>TLS 1.3</code> certificates, cipher suites, and <code>mTLS</code> for service-to-service auth' }
    ]
  },
  {
    id: 'phase-5',
    phaseNum: 5,
    filename: 'phase-5.redis',
    title: 'Phase 5: Caching, Queues & Async Systems',
    timeEstimate: 'Months 11–13',
    accentColor: '#f778ba',
    leadText: 'Accelerate read paths with distributed caches and decouple heavy processing via asynchronous event streams.',
    items: [
      { id: 'p5_1', subhead: 'Caching Architecture', text: 'In-memory data structures in <code>Redis</code>: Strings, Hashes, Sets, Sorted Sets, and Bitmaps', resource: { label: 'Redis Commands', url: 'https://redis.io/commands/' } },
      { id: 'p5_2', text: 'Caching patterns: <code>Cache-Aside</code>, <code>Write-Through</code>, and <code>Write-Behind</code> strategies' },
      { id: 'p5_3', text: 'Cache invalidation: TTL expiration policies, cache stampede prevention, and bloom filters' },
      { id: 'p5_4', subhead: 'Message Queues & Event Streaming', text: 'Task queue brokers: <code>RabbitMQ</code>, <code>BullMQ</code>, or <code>AWS SQS</code> for background worker pools' },
      { id: 'p5_5', text: 'Retry patterns: Exponential backoff with jitter, dead-letter queues (<code>DLQ</code>), and idempotent consumers' },
      { id: 'p5_6', text: 'Event streaming: <code>Apache Kafka</code> / <code>NATS</code> topic partitions, consumer groups, and offset commit log', resource: { label: 'Kafka Intro', url: 'https://kafka.apache.org/documentation/#introduction' } },
      { id: 'p5_7', text: 'Event-driven design: <code>Event Sourcing</code>, <code>CQRS</code>, and managing eventual consistency across boundaries' }
    ]
  },
  {
    id: 'phase-6',
    phaseNum: 6,
    filename: 'phase-6.arch',
    title: 'Phase 6: Distributed System Design & Architecture',
    timeEstimate: 'Months 13–16',
    accentColor: '#56d4dd',
    leadText: 'Design scalable, fault-tolerant architectures capable of sustaining millions of requests with high availability.',
    items: [
      { id: 'p6_1', subhead: 'Architectural Topologies', text: 'Monolith vs Microservices vs <code>Modular Monolith</code> trade-off evaluation' },
      { id: 'p6_2', text: 'Load balancing algorithms: Round-robin, Least Connections, Weighted, and <code>Consistent Hashing</code>' },
      { id: 'p6_3', text: 'Database scaling: Read-replicas, horizontal sharding, partition keys, and primary failover' },
      { id: 'p6_4', subhead: 'Traffic Control & Fault Tolerance', text: 'Rate limiting algorithms: <code>Token Bucket</code>, <code>Leaky Bucket</code>, and <code>Sliding Window Counter</code>', resource: { label: 'Rate Limiting Strategies', url: 'https://cloud.google.com/architecture/rate-limiting-strategies-techniques' } },
      { id: 'p6_5', text: 'Resilience patterns: <code>Circuit Breaker</code>, Bulkhead isolation, and graceful fallback modes' },
      { id: 'p6_6', text: 'Distributed consensus: Understanding <code>Raft</code> / <code>Paxos</code> consensus and <code>Redlock</code> distributed locks' },
      { id: 'p6_7', subhead: 'Classic System Design Mock Problems', text: 'Practice designing: URL Shortener, Chat Platform, Rate Limiter, Newsfeed Engine, and Distributed Storage' },
      { id: 'p6_8', text: 'Essential reading: <i>Designing Data-Intensive Applications</i> by Martin Kleppmann', resource: { label: 'DDIA Book', url: 'https://dataintensive.net/' } }
    ]
  },
  {
    id: 'phase-7',
    phaseNum: 7,
    filename: 'phase-7.tf',
    title: 'Phase 7: Cloud Infrastructure, DevOps & Observability',
    timeEstimate: 'Months 16–18',
    accentColor: '#e3b341',
    leadText: 'Deploy containerized microservices to cloud environments using automated CI/CD pipelines and infrastructure code.',
    items: [
      { id: 'p7_1', subhead: 'Containers & Orchestration', text: 'Docker containerization: Multi-stage Dockerfiles, minimal base images (<code>Alpine</code>/<code>Distroless</code>), layer cache', resource: { label: 'Docker Docs', url: 'https://docs.docker.com/' } },
      { id: 'p7_2', text: 'Kubernetes primitives: <code>Pods</code>, <code>Deployments</code>, <code>Services</code>, <code>Ingress</code>, <code>ConfigMaps</code>, and <code>Helm</code>', resource: { label: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/home/' } },
      { id: 'p7_3', subhead: 'Infrastructure as Code & CI/CD', text: 'Declarative infrastructure: <code>Terraform</code> / <code>OpenTofu</code> modules and remote state locking' },
      { id: 'p7_4', text: 'Automated CI/CD pipelines: <code>GitHub Actions</code> / <code>GitLab CI</code> linting, testing, image building, and deployment' },
      { id: 'p7_5', text: 'Cloud primitives on major providers: Managed VMs, serverless containers (<code>Cloud Run</code>/<code>ECS</code>), and IAM roles' },
      { id: 'p7_6', subhead: 'The 3 Pillars of Observability', text: 'Structured logging: <code>JSON logs</code> enriched with global request correlation IDs' },
      { id: 'p7_7', text: 'Metrics aggregation: <code>Prometheus</code> counters/gauges/histograms visualised via <code>Grafana</code>' },
      { id: 'p7_8', text: 'Distributed tracing: <code>OpenTelemetry</code> instrumentation for end-to-end request latency analysis', resource: { label: 'OpenTelemetry', url: 'https://opentelemetry.io/docs/' } }
    ]
  },
  {
    id: 'phase-8',
    phaseNum: 8,
    filename: 'phase-8.test',
    title: 'Phase 8: Software Testing, Reliability & SRE',
    timeEstimate: 'Months 18–20',
    accentColor: '#a5d6ff',
    leadText: 'Enforce high software quality with the testing pyramid, contract compatibility tests, and load stress testing.',
    items: [
      { id: 'p8_1', subhead: 'Testing Pyramid Strategy', text: 'Unit tests, integration tests, and end-to-end (<code>E2E</code>) regression test suites' },
      { id: 'p8_2', text: 'Contract testing: <code>Pact</code> for preventing breaking API changes between microservice consumers and providers' },
      { id: 'p8_3', text: 'Load & performance testing: <code>k6</code>, <code>Locust</code>, or <code>JMeter</code> measuring RPS, p95, and p99 latency', resource: { label: 'k6 Documentation', url: 'https://k6.io/docs/' } },
      { id: 'p8_4', subhead: 'Site Reliability Engineering', text: 'Chaos engineering: Fault injection, network latency simulation, and resilience validation' },
      { id: 'p8_5', text: 'SRE metrics: Defining <code>SLIs</code>, <code>SLOs</code>, and managing error budgets for release velocity' },
      { id: 'p8_6', text: 'Production incident response: On-call runbooks, post-mortems, and automated rollback triggers' }
    ]
  },
  {
    id: 'phase-9',
    phaseNum: 9,
    filename: 'future-2026.ai',
    title: 'Phase 9: AI-Native Systems, Edge & Future Trends',
    timeEstimate: '2026 & Beyond',
    accentColor: '#ff9d5c',
    isGradientHeader: true,
    leadText: 'Prepare for next-generation backend engineering: AI-native APIs, vector databases, edge compute runtimes, and WASM.',
    items: [
      { id: 'p9_1', subhead: 'AI-Native Backend Architecture', text: 'Vector databases & embeddings: <code>pgvector</code>, <code>Qdrant</code>, or <code>Pinecone</code> for high-dimensional similarity search', resource: { label: 'pgvector GitHub', url: 'https://github.com/pgvector/pgvector' } },
      { id: 'p9_2', text: 'RAG pipelines & LLM tool calling: Retrieval-Augmented Generation, structured outputs, and agentic function calls' },
      { id: 'p9_3', subhead: 'Edge Runtimes & Serverless Evolution', text: 'Edge execution runtimes: <code>Cloudflare Workers</code>, <code>Bun</code>, and <code>Wasmtime</code> WebAssembly micro-containers', resource: { label: 'Cloudflare Workers', url: 'https://developers.cloudflare.com/workers/' } },
      { id: 'p9_4', text: 'Modern serverless & scale-to-zero: Serverless Postgres (<code>Neon</code>) and SQLite at edge (<code>Turso</code>)' },
      { id: 'p9_5', subhead: 'Developer Experience & Full-Stack Interfaces', text: 'Internal Platform Engineering: Developer Portals (<code>Backstage</code>) and self-service infrastructure blueprints' },
      { id: 'p9_6', text: 'End-to-end type safety: RPC protocols (<code>tRPC</code>, <code>TypeRoute</code>) uniting client-server contracts seamlessly' }
    ]
  }
];
