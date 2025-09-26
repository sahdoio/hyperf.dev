<template>
  <div class="bg-black min-h-screen">
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Article Header -->
      <header class="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 mb-8">
        <div class="mb-4">
          <NuxtLink to="/blog" class="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
            ← Back to Blog
          </NuxtLink>
        </div>

        <div class="h-64 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg mb-6"></div>

        <div class="flex items-center text-sm text-gray-400 mb-4">
          <time datetime="2025-01-15">January 15, 2025</time>
          <span class="mx-2">·</span>
          <span>5 min read</span>
          <span class="mx-2">·</span>
          <span>Tutorial</span>
        </div>

        <h1 class="text-4xl font-bold text-white mb-4">
          Getting Started with Hyperf: Your First High-Performance PHP Application
        </h1>

        <p class="text-xl text-gray-300">
          Learn how to build your first application with Hyperf and discover the power of coroutine-based PHP development.
        </p>
      </header>

      <!-- Article Content -->
      <div class="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
        <p>
          Welcome to the world of high-performance PHP development with Hyperf! If you're tired of the limitations of traditional PHP frameworks and want to build lightning-fast applications, you're in the right place.
        </p>

        <h2>What Makes Hyperf Special?</h2>

        <p>
          Hyperf is not just another PHP framework. It's a revolutionary approach to PHP development that leverages the power of coroutines to achieve unprecedented performance. Unlike traditional PHP-FPM frameworks that create a new process for each request, Hyperf uses coroutines to handle multiple requests concurrently within a single process.
        </p>

        <h2>Prerequisites</h2>

        <p>Before we dive in, make sure you have:</p>

        <ul>
          <li>PHP 8.1 or higher</li>
          <li>Swoole extension 5.0+</li>
          <li>Composer for dependency management</li>
        </ul>

        <h2>Installing Hyperf</h2>

        <p>Creating a new Hyperf project is straightforward with Composer:</p>

        <pre><code>composer create-project hyperf/hyperf-skeleton my-hyperf-app</code></pre>

        <p>This command creates a new directory called <code>my-hyperf-app</code> with a complete Hyperf application structure.</p>

        <h2>Project Structure</h2>

        <p>Let's explore the key directories in your new Hyperf project:</p>

        <ul>
          <li><strong>app/</strong> - Your application code (controllers, models, services)</li>
          <li><strong>config/</strong> - Configuration files</li>
          <li><strong>runtime/</strong> - Logs and cache files</li>
          <li><strong>bin/hyperf.php</strong> - The main application entry point</li>
        </ul>

        <h2>Your First Controller</h2>

        <p>Let's create a simple controller to see Hyperf in action:</p>

        <pre><code>&lt;?php

namespace App\Controller;

use Hyperf\HttpServer\Annotation\AutoController;

#[AutoController]
class HelloController
{
    public function index()
    {
        return [
            'message' => 'Hello, Hyperf!',
            'timestamp' => time(),
            'performance' => 'Lightning fast! ⚡'
        ];
    }
}</code></pre>

        <h2>Starting Your Application</h2>

        <p>To start your Hyperf application, run:</p>

        <pre><code>php bin/hyperf.php start</code></pre>

        <p>Your application will start on <code>http://localhost:9501</code> by default. Visit <code>http://localhost:9501/hello</code> to see your controller in action!</p>

        <h2>Understanding Coroutines</h2>

        <p>
          The magic of Hyperf lies in its coroutine support. When you make database queries, HTTP requests, or other I/O operations, Hyperf automatically yields control to other coroutines, allowing your application to handle thousands of concurrent requests efficiently.
        </p>

        <h2>Next Steps</h2>

        <p>Now that you have a basic Hyperf application running, you can:</p>

        <ul>
          <li>Explore the <a href="https://hyperf.wiki/3.1/#/en/" target="_blank">official documentation</a></li>
          <li>Join our <a href="https://discord.gg/hPQSAPknfp" target="_blank">Discord community</a></li>
          <li>Experiment with middleware, dependency injection, and database operations</li>
          <li>Build a REST API or microservice</li>
        </ul>

        <h2>Conclusion</h2>

        <p>
          Congratulations! You've just taken your first step into the world of high-performance PHP development with Hyperf. The framework's coroutine-based architecture opens up possibilities that were previously unthinkable in PHP.
        </p>

        <p>
          Stay tuned for more tutorials where we'll dive deeper into Hyperf's advanced features, including microservices architecture, real-time applications, and performance optimization techniques.
        </p>
      </div>

      <!-- Article Footer -->
      <footer class="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 mt-8">
        <div class="flex flex-wrap gap-2 mb-6">
          <span class="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded-full">Tutorial</span>
          <span class="px-3 py-1 bg-green-600 text-green-100 text-sm rounded-full">Beginner</span>
          <span class="px-3 py-1 bg-purple-600 text-purple-100 text-sm rounded-full">Getting Started</span>
        </div>

        <div class="border-t border-gray-600 pt-6">
          <h3 class="text-lg font-semibold mb-4 text-white">Share this article</h3>
          <div class="flex space-x-4">
            <button class="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm hover:bg-yellow-400 transition-colors">
              Share on Twitter
            </button>
            <button class="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-500 transition-colors">
              Share on LinkedIn
            </button>
          </div>
        </div>
      </footer>
    </article>
  </div>
</template>

<script setup>
useHead({
  title: 'Getting Started with Hyperf - Blog',
  meta: [
    {
      name: 'description',
      content: 'Learn how to build your first application with Hyperf and discover the power of coroutine-based PHP development.'
    }
  ]
})
</script>

<style scoped>
.prose pre {
  @apply bg-gray-900 border border-gray-600 p-4 rounded-lg overflow-x-auto text-gray-100;
}

.prose code {
  @apply bg-gray-700 px-2 py-1 rounded text-sm text-gray-200;
}

.prose h2 {
  @apply text-2xl font-bold text-white mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold text-white mt-6 mb-3;
}

.prose p {
  @apply text-gray-300 mb-4 leading-relaxed;
}

.prose ul {
  @apply mb-4 pl-6;
}

.prose li {
  @apply mb-2 text-gray-300;
}

.prose a {
  @apply text-yellow-400 hover:text-yellow-300 underline;
}
</style>