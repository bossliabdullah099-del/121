// Live Internet Web Search, URL Reader, Market Data Fetcher & Quantitative Private Valuation Engine

export interface StockQuote {
  symbol: string;
  name: string;
  price: number;
  previousClose: number | null;
  change: number | null;
  changePercent: number | null;
  currency: string;
  exchange: string;
  high52Week: number | null;
  low52Week: number | null;
  marketTimeIso: string | null;
}

export interface CryptoQuote {
  id: string;
  symbol: string;
  name: string;
  priceUsd: number;
  change24hPercent: number | null;
  marketCapUsd: number | null;
  volume24hUsd: number | null;
}

export interface FxRateResult {
  pair: string;
  base: string;
  quote: string;
  amount: number;
  rate: number;
  convertedAmount: number;
  updatedUtc: string | null;
}

export interface WebSearchResult {
  title: string;
  url: string;
  source: string;
  publishedAt?: string;
  snippet?: string;
}

export interface FetchedUrlContent {
  url: string;
  title: string;
  snippet: string;
}

export interface LiveMarketSnapshot {
  fetchedAtIso: string;
  stocks: StockQuote[];
  crypto: CryptoQuote[];
  fx: FxRateResult[];
  urls: string[];
  fetchedUrls: FetchedUrlContent[];
  webResults: WebSearchResult[];
  hasLiveInternetIntent: boolean;
  hasMarketIntent: boolean;
  hasValuationIntent: boolean;
  namedPrivateCompanies: string[];
}

const EQUITY_ALIAS_MAP: Array<{ pattern: RegExp; symbol: string; name: string }> = [
  { pattern: /\b(apple|aapl)\b/i, symbol: 'AAPL', name: 'Apple Inc.' },
  { pattern: /\b(microsoft|msft)\b/i, symbol: 'MSFT', name: 'Microsoft Corp.' },
  { pattern: /\b(nvidia|nvda)\b/i, symbol: 'NVDA', name: 'NVIDIA Corp.' },
  { pattern: /\b(google|alphabet|googl|goog)\b/i, symbol: 'GOOGL', name: 'Alphabet Inc.' },
  { pattern: /\b(amazon|amzn)\b/i, symbol: 'AMZN', name: 'Amazon.com Inc.' },
  { pattern: /\b(meta\s+platforms|meta\s+stock|\bmeta\b|facebook\s+stock)\b/i, symbol: 'META', name: 'Meta Platforms Inc.' },
  { pattern: /\b(tesla|tsla)\b/i, symbol: 'TSLA', name: 'Tesla Inc.' },
  { pattern: /\b(broadcom|avgo)\b/i, symbol: 'AVGO', name: 'Broadcom Inc.' },
  { pattern: /\b(netflix|nflx)\b/i, symbol: 'NFLX', name: 'Netflix Inc.' },
  { pattern: /\b(amd|advanced\s+micro\s+devices)\b/i, symbol: 'AMD', name: 'Advanced Micro Devices' },
  { pattern: /\b(intel|intc)\b/i, symbol: 'INTC', name: 'Intel Corp.' },
  { pattern: /\b(oracle|orcl)\b/i, symbol: 'ORCL', name: 'Oracle Corp.' },
  { pattern: /\b(palantir|pltr)\b/i, symbol: 'PLTR', name: 'Palantir Technologies' },
  { pattern: /\b(coinbase|coin)\b/i, symbol: 'COIN', name: 'Coinbase Global' },
  { pattern: /\b(microstrategy|strategy\s+stock|mstr)\b/i, symbol: 'MSTR', name: 'MicroStrategy Inc.' },
  { pattern: /\b(berkshire|brk\.?b)\b/i, symbol: 'BRK-B', name: 'Berkshire Hathaway' },
  { pattern: /\b(tsmc|taiwan\s+semiconductor|\btsm\b)\b/i, symbol: 'TSM', name: 'TSMC' },
  { pattern: /\b(arm\s+holdings|\barm\b)\b/i, symbol: 'ARM', name: 'Arm Holdings' },
  { pattern: /\b(s&p\s*500|sp500|spx|\^gspc)\b/i, symbol: '^GSPC', name: 'S&P 500 Index' },
  { pattern: /\b(nasdaq|ixic|\^ixic)\b/i, symbol: '^IXIC', name: 'NASDAQ Composite' },
  { pattern: /\b(dow\s+jones|djia|\^dji)\b/i, symbol: '^DJI', name: 'Dow Jones Industrial Average' },
  { pattern: /\b(russell\s*2000|\^rut)\b/i, symbol: '^RUT', name: 'Russell 2000 Index' },
  { pattern: /\b(vix|volatility\s+index|\^vix)\b/i, symbol: '^VIX', name: 'CBOE Volatility Index (VIX)' },
  { pattern: /\b(ftse\s*100|\^ftse)\b/i, symbol: '^FTSE', name: 'FTSE 100 Index' },
  { pattern: /\b(nikkei\s*225|\^n225)\b/i, symbol: '^N225', name: 'Nikkei 225' },
  { pattern: /\b(\bspy\b)\b/i, symbol: 'SPY', name: 'SPDR S&P 500 ETF' },
  { pattern: /\b(\bqqq\b)\b/i, symbol: 'QQQ', name: 'Invesco QQQ Trust' },
  { pattern: /\b(\bvoo\b)\b/i, symbol: 'VOO', name: 'Vanguard S&P 500 ETF' },
  { pattern: /\b(gold|xau|gc=f)\b/i, symbol: 'GC=F', name: 'Gold Futures (COMEX)' },
  { pattern: /\b(silver|xag|si=f)\b/i, symbol: 'SI=F', name: 'Silver Futures (COMEX)' },
  { pattern: /\b(crude\s+oil|wti|oil\s+price|cl=f)\b/i, symbol: 'CL=F', name: 'WTI Crude Oil Futures' },
  { pattern: /\b(brent\s+oil|brent\s+crude|bz=f)\b/i, symbol: 'BZ=F', name: 'Brent Crude Oil Futures' },
  { pattern: /\b(natural\s+gas|ng=f)\b/i, symbol: 'NG=F', name: 'Natural Gas Futures' },
  { pattern: /\b(10[\s-]*year\s+(treasury|yield)|treasury\s+yield|\^tnx)\b/i, symbol: '^TNX', name: 'US 10-Year Treasury Yield' },
];

const CRYPTO_ALIAS_MAP: Array<{ pattern: RegExp; id: string; symbol: string; name: string }> = [
  { pattern: /\b(bitcoin|btc)\b/i, id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
  { pattern: /\b(ethereum|eth)\b/i, id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
  { pattern: /\b(solana|sol)\b/i, id: 'solana', symbol: 'SOL', name: 'Solana' },
  { pattern: /\b(binance\s+coin|bnb)\b/i, id: 'binancecoin', symbol: 'BNB', name: 'BNB' },
  { pattern: /\b(ripple|xrp)\b/i, id: 'ripple', symbol: 'XRP', name: 'XRP' },
  { pattern: /\b(dogecoin|doge)\b/i, id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin' },
  { pattern: /\b(cardano|ada)\b/i, id: 'cardano', symbol: 'ADA', name: 'Cardano' },
  { pattern: /\b(avalanche|avax)\b/i, id: 'avalanche-2', symbol: 'AVAX', name: 'Avalanche' },
  { pattern: /\b(chainlink|link)\b/i, id: 'chainlink', symbol: 'LINK', name: 'Chainlink' },
  { pattern: /\b(toncoin|ton)\b/i, id: 'the-open-network', symbol: 'TON', name: 'Toncoin' },
  { pattern: /\b(\bsui\b)\b/i, id: 'sui', symbol: 'SUI', name: 'Sui' },
  { pattern: /\b(litecoin|ltc)\b/i, id: 'litecoin', symbol: 'LTC', name: 'Litecoin' },
  { pattern: /\b(polkadot|dot)\b/i, id: 'polkadot', symbol: 'DOT', name: 'Polkadot' },
];

const SUPPORTED_FX_CODES = new Set([
  'USD', 'PKR', 'EUR', 'GBP', 'JPY', 'AED', 'SAR', 'INR', 'CNY', 'CAD',
  'AUD', 'CHF', 'TRY', 'SGD', 'HKD', 'KRW', 'BRL', 'MXN', 'MYR', 'IDR',
  'BDT', 'QAR', 'KWD', 'OMR', 'BHD', 'ZAR', 'NZD', 'SEK', 'NOK', 'DKK',
  'PLN', 'THB', 'PHP', 'VND', 'EGP', 'NGN',
]);

const FX_NAME_MAP: Array<{ pattern: RegExp; code: string }> = [
  { pattern: /\b(us\s+dollar|american\s+dollar|dollars?)\b/i, code: 'USD' },
  { pattern: /\b(pakistani\s+rupee|pak\s+rupee|rupees?\s+pakistan)\b/i, code: 'PKR' },
  { pattern: /\b(euro|euros)\b/i, code: 'EUR' },
  { pattern: /\b(british\s+pound|pound\s+sterling|uk\s+pound)\b/i, code: 'GBP' },
  { pattern: /\b(japanese\s+yen|yen)\b/i, code: 'JPY' },
  { pattern: /\b(uae\s+dirham|dirham|emirates\s+dirham)\b/i, code: 'AED' },
  { pattern: /\b(saudi\s+riyal|riyal)\b/i, code: 'SAR' },
  { pattern: /\b(indian\s+rupee)\b/i, code: 'INR' },
  { pattern: /\b(chinese\s+yuan|renminbi|rmb)\b/i, code: 'CNY' },
  { pattern: /\b(canadian\s+dollar)\b/i, code: 'CAD' },
  { pattern: /\b(australian\s+dollar)\b/i, code: 'AUD' },
  { pattern: /\b(swiss\s+franc)\b/i, code: 'CHF' },
  { pattern: /\b(turkish\s+lira)\b/i, code: 'TRY' },
];

const NAMED_PRIVATE_COMPANIES: Array<{ pattern: RegExp; name: string }> = [
  { pattern: /\bspacex\b/i, name: 'SpaceX' },
  { pattern: /\bopenai\b/i, name: 'OpenAI' },
  { pattern: /\bstripe\b/i, name: 'Stripe' },
  { pattern: /\bdatabricks\b/i, name: 'Databricks' },
  { pattern: /\banthropic\b/i, name: 'Anthropic' },
  { pattern: /\bxai\b/i, name: 'xAI' },
  { pattern: /\bbytedance\b/i, name: 'ByteDance' },
  { pattern: /\bcanva\b/i, name: 'Canva' },
  { pattern: /\bshein\b/i, name: 'Shein' },
  { pattern: /\brevolut\b/i, name: 'Revolut' },
  { pattern: /\bscale\s*ai\b/i, name: 'Scale AI' },
  { pattern: /\banduril\b/i, name: 'Anduril Industries' },
  { pattern: /\bperplexity\b/i, name: 'Perplexity AI' },
  { pattern: /\bfanatics\b/i, name: 'Fanatics' },
  { pattern: /\bdiscord\b/i, name: 'Discord' },
  { pattern: /\bklarna\b/i, name: 'Klarna' },
  { pattern: /\bcoreweave\b/i, name: 'CoreWeave' },
  { pattern: /\bfigure\s*ai\b/i, name: 'Figure AI' },
  { pattern: /\bmistral\b/i, name: 'Mistral AI' },
  { pattern: /\banysphere|\bcursor\s+(ai|valuation|company)\b/i, name: 'Anysphere (Cursor)' },
  { pattern: /\bvercel\b/i, name: 'Vercel' },
  { pattern: /\bsupabase\b/i, name: 'Supabase' },
  { pattern: /\bfigma\b/i, name: 'Figma' },
  { pattern: /\bwaymo\b/i, name: 'Waymo' },
];

export function extractUrlsFromPrompt(message: string): string[] {
  if (!message || typeof message !== 'string') return [];
  const matches = message.match(/https?:\/\/[^\s<>"'`)\]]+/gi) || [];
  const cleaned = matches
    .map((u) => u.replace(/[.,;!?]+$/, ''))
    .filter((u) => {
      try {
        const parsed = new URL(u);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
      } catch {
        return false;
      }
    });
  return Array.from(new Set(cleaned)).slice(0, 4);
}

export function detectMarketAndWebIntent(message: string): {
  hasLiveInternetIntent: boolean;
  hasMarketIntent: boolean;
  hasValuationIntent: boolean;
  urls: string[];
  namedPrivateCompanies: string[];
} {
  const text = (message || '').trim();
  const urls = extractUrlsFromPrompt(text);

  const hasMarketIntent =
    /\b(stock|stocks|share\s+price|ticker|nasdaq|s&p\s*500|sp500|dow\s+jones|nyse|etf|etfs|crypto|cryptocurrency|bitcoin|btc|ethereum|eth|solana|sol|forex|fx|exchange\s+rate|currency|gold|silver|crude\s+oil|wti|brent|commodity|commodities|treasury|bond\s+yield|fed\s+rate|interest\s+rate|cpi|inflation|gdp|earnings|market\s+cap|bull\s+market|bear\s+market|premarket|after\s+hours|price\s+today|live\s+price|usd\/[a-z]{3}|[a-z]{3}\/[a-z]{3})\b/i.test(
      text
    ) ||
    /\b(aapl|msft|nvda|tsla|googl|amzn|meta|spy|qqq)\b/i.test(text) ||
    /\$[A-Z]{1,5}\b/.test(text);

  const namedPrivateCompanies = NAMED_PRIVATE_COMPANIES.filter((c) => c.pattern.test(text)).map((c) => c.name);

  const hasValuationIntent =
    /\b(private\s+valuation|private\s+valuations|private\s+market|company\s+valuation|startup\s+valuation|valuation\s+model|valuation\s+multiple|pre[\s-]*money|post[\s-]*money|dcf|discounted\s+cash\s+flow|wacc|terminal\s+value|ev\s*\/\s*rev|ev\s*\/\s*revenue|ev\s*\/\s*ebitda|arr\s+multiple|revenue\s+multiple|ebitda|cap\s+table|dilution|409a|dlom|illiquidity\s+discount|precedent\s+transactions?|trading\s+comps|comparable\s+companies|series\s+[a-f]|seed\s+round|funding\s+round|unicorn|decacorn|secondary\s+market|forge\s+global|equityzen|hiive|enterprise\s+value|equity\s+value|rule\s+of\s+40|berkus|scorecard\s+method|vc\s+method|value\s+(this|my|a)\s+(startup|company|business))\b/i.test(
      text
    ) ||
    (namedPrivateCompanies.length > 0 &&
      /\b(worth|valuation|valued|funding|raise|raised|round|secondary|share\s+price|market\s+cap|equity|invest)\b/i.test(text));

  const hasExplicitWebOrNewsIntent =
    /\b(news|headlines|breaking|search\s+(the\s+)?(web|internet|google|online)|look\s+up|browse|check\s+online|what('s|\s+is)\s+happening\s+(in|around|with)|happening\s+now|latest\s+(news|updates?|developments?|version|release)|recent\s+(news|events?|developments?)|who\s+(won|is\s+winning)|score\s+of|match\s+result|weather\s+(in|for|today|tomorrow)|forecast\s+(in|for)|exchange\s+rate|president\s+of|prime\s+minister\s+of|ceo\s+of|ipo)\b/i.test(
      text
    );

  const hasLiveInternetIntent =
    urls.length > 0 ||
    hasMarketIntent ||
    hasValuationIntent ||
    hasExplicitWebOrNewsIntent;

  return {
    hasLiveInternetIntent,
    hasMarketIntent,
    hasValuationIntent,
    urls,
    namedPrivateCompanies,
  };
}

async function fetchTextWithTimeout(url: string, headers: Record<string, string> = {}, timeoutMs = 2600): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; BossAuraAI/1.0)',
        ...headers,
      },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function fetchJsonWithTimeout<T>(url: string, headers: Record<string, string> = {}, timeoutMs = 2600): Promise<T | null> {
  const raw = await fetchTextWithTimeout(url, { Accept: 'application/json', ...headers }, timeoutMs);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function decodeHtmlEntities(input: string): string {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchGoogleNewsRss(query: string, limit = 6): Promise<WebSearchResult[]> {
  const cleanQuery = query
    .replace(/^(search\s+(the\s+)?(web|internet|google|online)\s*[:,-]?\s*)/i, '')
    .replace(/\b(what\s+(are|is)\s+(the\s+)?|tell\s+me\s+(about\s+)?|give\s+me\s+(the\s+)?|find\s+(the\s+)?|check\s+(the\s+)?|headlines?|today|right\s+now|please|latest\s+updates?\s+on)\b/gi, ' ')
    .replace(/[?!.,]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120) || query.slice(0, 120);
  if (!cleanQuery) return [];

  const xml = await fetchTextWithTimeout(
    `https://news.google.com/rss/search?q=${encodeURIComponent(cleanQuery)}&hl=en-US&gl=US&ceid=US:en`,
    { Accept: 'application/rss+xml, application/xml, text/xml' },
    2600
  );
  if (!xml) return [];

  const results: WebSearchResult[] = [];
  const itemMatches = xml.match(/<item>[\s\S]*?<\/item>/gi) || [];
  for (const itemXml of itemMatches.slice(0, limit)) {
    const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/i);
    const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/i);
    const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i);
    const sourceMatch = itemXml.match(/<source[^>]*>([\s\S]*?)<\/source>/i);

    const title = titleMatch ? decodeHtmlEntities(titleMatch[1]) : '';
    const url = linkMatch ? decodeHtmlEntities(linkMatch[1]) : '';
    const publishedAt = pubDateMatch ? decodeHtmlEntities(pubDateMatch[1]) : undefined;
    const source = sourceMatch ? decodeHtmlEntities(sourceMatch[1]) : 'Google News';

    if (
      title &&
      url &&
      url.startsWith('http') &&
      !/school\s+assembly\s+news/i.test(title)
    ) {
      results.push({ title, url, source, publishedAt });
    }
  }
  return results;
}

export async function fetchWikipediaFallbackSummary(query: string): Promise<{ title: string; extract: string; url: string } | null> {
  const clean = query
    .replace(/^(what\s+is\s+(a|an|the)?|who\s+(is|was)|explain|define|tell\s+me\s+about|how\s+does|how\s+do)\s+/i, '')
    .replace(/\b(in\s+\d+\s+(sentences?|words?|lines?)|briefly|shortly|simply)\b/gi, '')
    .replace(/[?!.,]+$/g, '')
    .trim();
  if (!clean || clean.length > 100) return null;

  const hits = await fetchWikipediaSummarySearch(clean, 1);
  if (!hits.length) return null;
  const topTitle = hits[0].title;
  const summaryData = await fetchJsonWithTimeout<any>(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topTitle.replace(/ /g, '_'))}`
  );
  if (summaryData?.extract && typeof summaryData.extract === 'string') {
    return {
      title: String(summaryData.title || topTitle),
      extract: summaryData.extract.trim(),
      url: summaryData?.content_urls?.desktop?.page || hits[0].url,
    };
  }
  return null;
}

async function fetchWikipediaSummarySearch(query: string, limit = 3): Promise<WebSearchResult[]> {
  const cleanQuery = query
    .replace(/^(search\s+(the\s+)?(web|internet|google|online)\s*[:,-]?\s*)/i, '')
    .trim()
    .slice(0, 120);
  if (!cleanQuery) return [];

  const data = await fetchJsonWithTimeout<any>(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
      cleanQuery
    )}&format=json&srlimit=${limit}`
  );
  const hits = data?.query?.search;
  if (!Array.isArray(hits)) return [];

  return hits
    .filter((h: any) => h?.title)
    .map((h: any) => ({
      title: String(h.title),
      url: `https://en.wikipedia.org/wiki/${encodeURIComponent(String(h.title).replace(/ /g, '_'))}`,
      source: 'Wikipedia',
      snippet: h.snippet ? decodeHtmlEntities(String(h.snippet)) : undefined,
    }));
}

async function fetchUrlReadableSnippet(url: string): Promise<FetchedUrlContent | null> {
  const html = await fetchTextWithTimeout(url, { Accept: 'text/html,application/xhtml+xml,text/plain' }, 2600);
  if (!html) return null;
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeHtmlEntities(titleMatch[1]).slice(0, 160) : url;
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ');
  const text = decodeHtmlEntities(stripped).slice(0, 1600);
  if (!text) return null;
  return { url, title, snippet: text };
}

async function fetchYahooQuote(symbol: string, fallbackName?: string): Promise<StockQuote | null> {
  const data = await fetchJsonWithTimeout<any>(
    `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=5d`
  );
  const meta = data?.chart?.result?.[0]?.meta;
  if (!meta || typeof meta.regularMarketPrice !== 'number') return null;

  const price = Number(meta.regularMarketPrice);
  const prev =
    typeof meta.chartPreviousClose === 'number'
      ? Number(meta.chartPreviousClose)
      : typeof meta.previousClose === 'number'
      ? Number(meta.previousClose)
      : null;
  const change = prev !== null ? price - prev : null;
  const changePercent = prev && prev !== 0 && change !== null ? (change / prev) * 100 : null;
  const marketTimeIso =
    typeof meta.regularMarketTime === 'number'
      ? new Date(meta.regularMarketTime * 1000).toISOString()
      : null;

  return {
    symbol: meta.symbol || symbol,
    name: meta.shortName || meta.longName || fallbackName || symbol,
    price,
    previousClose: prev,
    change,
    changePercent,
    currency: meta.currency || 'USD',
    exchange: meta.fullExchangeName || meta.exchangeName || 'Market',
    high52Week: typeof meta.fiftyTwoWeekHigh === 'number' ? Number(meta.fiftyTwoWeekHigh) : null,
    low52Week: typeof meta.fiftyTwoWeekLow === 'number' ? Number(meta.fiftyTwoWeekLow) : null,
    marketTimeIso,
  };
}

function detectRequestedEquities(message: string): Array<{ symbol: string; name: string }> {
  const picked = new Map<string, string>();
  for (const item of EQUITY_ALIAS_MAP) {
    if (item.pattern.test(message)) {
      picked.set(item.symbol, item.name);
    }
  }

  const dollarTickers = message.match(/\$([A-Z]{1,5}(?:-[A-Z])?)\b/g) || [];
  for (const raw of dollarTickers) {
    const sym = raw.slice(1).toUpperCase();
    if (!SUPPORTED_FX_CODES.has(sym) && !picked.has(sym)) {
      picked.set(sym, sym);
    }
  }

  if (
    picked.size === 0 &&
    /\b(stock\s+market|markets?\s+today|wall\s+street|equities|market\s+update|market\s+overview|us\s+stocks|live\s+markets?)\b/i.test(
      message
    )
  ) {
    picked.set('^GSPC', 'S&P 500 Index');
    picked.set('^IXIC', 'NASDAQ Composite');
    picked.set('^DJI', 'Dow Jones Industrial Average');
    picked.set('GC=F', 'Gold Futures');
  }

  return Array.from(picked.entries())
    .slice(0, 6)
    .map(([symbol, name]) => ({ symbol, name }));
}

function detectRequestedCrypto(message: string): Array<{ id: string; symbol: string; name: string }> {
  const picked = new Map<string, { id: string; symbol: string; name: string }>();
  for (const c of CRYPTO_ALIAS_MAP) {
    if (c.pattern.test(message)) {
      picked.set(c.id, { id: c.id, symbol: c.symbol, name: c.name });
    }
  }

  if (picked.size === 0 && /\b(crypto|cryptocurrency|crypto\s+market|digital\s+assets)\b/i.test(message)) {
    picked.set('bitcoin', { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' });
    picked.set('ethereum', { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' });
    picked.set('solana', { id: 'solana', symbol: 'SOL', name: 'Solana' });
  }

  return Array.from(picked.values()).slice(0, 6);
}

function detectRequestedFxPairs(message: string): Array<{ base: string; quote: string; amount: number }> {
  const pairs: Array<{ base: string; quote: string; amount: number }> = [];
  const seen = new Set<string>();

  const addPair = (base: string, quote: string, amount = 1) => {
    const b = base.toUpperCase();
    const q = quote.toUpperCase();
    if (!SUPPORTED_FX_CODES.has(b) || !SUPPORTED_FX_CODES.has(q) || b === q) return;
    const key = `${b}/${q}:${amount}`;
    if (!seen.has(key)) {
      seen.add(key);
      pairs.push({ base: b, quote: q, amount });
    }
  };

  const amountRegex = /(\d+(?:\.\d+)?)\s*([A-Za-z]{3})\s+(?:to|in|into|->|=)\s+([A-Za-z]{3})\b/gi;
  let match: RegExpExecArray | null;
  while ((match = amountRegex.exec(message)) !== null) {
    const amt = parseFloat(match[1]);
    if (Number.isFinite(amt) && amt > 0) {
      addPair(match[2], match[3], amt);
    }
  }

  const pairRegex = /\b([A-Za-z]{3})\s*(?:\/|to|vs|in|-)\s*([A-Za-z]{3})\b/gi;
  while ((match = pairRegex.exec(message)) !== null) {
    addPair(match[1], match[2], 1);
  }

  if (pairs.length === 0 && /\b(exchange\s+rate|forex|fx\s+rate|currency|dollar\s+rate|rupee\s+rate)\b/i.test(message)) {
    const mentionedCodes: string[] = [];
    const upperTokens = message.toUpperCase().match(/\b[A-Z]{3}\b/g) || [];
    for (const t of upperTokens) {
      if (SUPPORTED_FX_CODES.has(t) && !mentionedCodes.includes(t)) {
        mentionedCodes.push(t);
      }
    }
    for (const item of FX_NAME_MAP) {
      if (item.pattern.test(message) && !mentionedCodes.includes(item.code)) {
        mentionedCodes.push(item.code);
      }
    }
    if (mentionedCodes.length >= 2) {
      addPair(mentionedCodes[0], mentionedCodes[1], 1);
    } else if (mentionedCodes.length === 1 && mentionedCodes[0] !== 'USD') {
      addPair('USD', mentionedCodes[0], 1);
    } else {
      addPair('USD', 'EUR', 1);
      addPair('USD', 'GBP', 1);
      addPair('USD', 'PKR', 1);
      addPair('USD', 'JPY', 1);
    }
  }

  return pairs.slice(0, 6);
}

export async function fetchLiveMarketSnapshot(message: string): Promise<LiveMarketSnapshot> {
  const intent = detectMarketAndWebIntent(message);
  const fetchedAtIso = new Date().toISOString();

  const equitiesToFetch = detectRequestedEquities(message);
  const cryptoToFetch = detectRequestedCrypto(message);
  const fxPairsToFetch = detectRequestedFxPairs(message);

  // Build targeted web search queries ONLY for explicit news/search/private-company valuation queries
  const newsQueries: string[] = [];
  if (intent.namedPrivateCompanies.length > 0 && intent.hasValuationIntent) {
    for (const co of intent.namedPrivateCompanies.slice(0, 2)) {
      newsQueries.push(`${co} valuation funding IPO`);
    }
  } else if (
    /\b(news|headlines|breaking|search\s+(the\s+)?(web|internet|google|online)|look\s+up|browse|happening\s+(now|today))\b/i.test(
      message
    )
  ) {
    newsQueries.push(message);
  }

  const [stocks, crypto, fx, fetchedUrls, webResults] = await Promise.all([
    equitiesToFetch.length > 0
      ? Promise.all(equitiesToFetch.map((e) => fetchYahooQuote(e.symbol, e.name))).then((res) =>
          res.filter((q): q is StockQuote => q !== null)
        )
      : Promise.resolve([] as StockQuote[]),

    cryptoToFetch.length > 0
      ? (async (): Promise<CryptoQuote[]> => {
          const ids = cryptoToFetch.map((c) => c.id).join(',');
          const data = await fetchJsonWithTimeout<Record<string, any>>(
            `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(
              ids
            )}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
          );
          if (!data) return [];
          const out: CryptoQuote[] = [];
          for (const item of cryptoToFetch) {
            const entry = data[item.id];
            if (entry && typeof entry.usd === 'number') {
              out.push({
                id: item.id,
                symbol: item.symbol,
                name: item.name,
                priceUsd: Number(entry.usd),
                change24hPercent: typeof entry.usd_24h_change === 'number' ? Number(entry.usd_24h_change) : null,
                marketCapUsd: typeof entry.usd_market_cap === 'number' ? Number(entry.usd_market_cap) : null,
                volume24hUsd: typeof entry.usd_24h_vol === 'number' ? Number(entry.usd_24h_vol) : null,
              });
            }
          }
          return out;
        })()
      : Promise.resolve([] as CryptoQuote[]),

    fxPairsToFetch.length > 0
      ? (async (): Promise<FxRateResult[]> => {
          const data = await fetchJsonWithTimeout<any>('https://open.er-api.com/v6/latest/USD');
          const rates = data?.rates;
          if (!rates || typeof rates !== 'object') return [];
          const updatedUtc = typeof data?.time_last_update_utc === 'string' ? data.time_last_update_utc : null;
          const results: FxRateResult[] = [];
          for (const pair of fxPairsToFetch) {
            const basePerUsd = pair.base === 'USD' ? 1 : Number(rates[pair.base]);
            const quotePerUsd = pair.quote === 'USD' ? 1 : Number(rates[pair.quote]);
            if (Number.isFinite(basePerUsd) && basePerUsd > 0 && Number.isFinite(quotePerUsd) && quotePerUsd > 0) {
              const rate = quotePerUsd / basePerUsd;
              results.push({
                pair: `${pair.base}/${pair.quote}`,
                base: pair.base,
                quote: pair.quote,
                amount: pair.amount,
                rate,
                convertedAmount: pair.amount * rate,
                updatedUtc,
              });
            }
          }
          return results;
        })()
      : Promise.resolve([] as FxRateResult[]),

    intent.urls.length > 0
      ? Promise.all(intent.urls.slice(0, 2).map((u) => fetchUrlReadableSnippet(u))).then((res) =>
          res.filter((r): r is FetchedUrlContent => r !== null)
        )
      : Promise.resolve([] as FetchedUrlContent[]),

    newsQueries.length > 0
      ? (async (): Promise<WebSearchResult[]> => {
          const rssBatches = await Promise.all(newsQueries.map((q) => fetchGoogleNewsRss(q, 5)));
          const wikiBatch =
            intent.namedPrivateCompanies.length > 0
              ? await fetchWikipediaSummarySearch(
                  `${intent.namedPrivateCompanies.slice(0, 2).join(' ')} valuation`,
                  2
                )
              : [];
          const merged = [...rssBatches.flat(), ...wikiBatch];
          const dedup = new Map<string, WebSearchResult>();
          for (const r of merged) {
            if (!dedup.has(r.url)) dedup.set(r.url, r);
          }
          return Array.from(dedup.values()).slice(0, 8);
        })()
      : Promise.resolve([] as WebSearchResult[]),
  ]);

  return {
    fetchedAtIso,
    stocks,
    crypto,
    fx,
    urls: intent.urls,
    fetchedUrls,
    webResults,
    hasLiveInternetIntent: intent.hasLiveInternetIntent || webResults.length > 0 || fetchedUrls.length > 0,
    hasMarketIntent: intent.hasMarketIntent || stocks.length > 0 || crypto.length > 0 || fx.length > 0,
    hasValuationIntent: intent.hasValuationIntent,
    namedPrivateCompanies: intent.namedPrivateCompanies,
  };
}

// ---------- Quantitative Private Valuation Engine ----------

interface ParsedFinancialInputs {
  arrOrRevenueUsd: number | null;
  arrLabel: 'ARR' | 'Revenue';
  growthPercent: number | null;
  grossMarginPercent: number | null;
  ebitdaUsd: number | null;
  fcfUsd: number | null;
  cashUsd: number | null;
  debtUsd: number | null;
  waccPercent: number | null;
  terminalGrowthPercent: number | null;
}

function parseMagnitudeNumber(rawValue: string, rawUnit?: string): number | null {
  const num = parseFloat(rawValue.replace(/,/g, ''));
  if (!Number.isFinite(num)) return null;
  const u = (rawUnit || '').toLowerCase();
  if (u === 'b' || u === 'bn' || u === 'billion') return num * 1_000_000_000;
  if (u === 'm' || u === 'mn' || u === 'million') return num * 1_000_000;
  if (u === 'k' || u === 'thousand') return num * 1_000;
  return num;
}

function extractLabeledAmount(message: string, labelPattern: string): number | null {
  const regexBefore = new RegExp(
    `\\$?\\s*(\\d[\\d,]*(?:\\.\\d+)?)\\s*(b|bn|billion|m|mn|million|k|thousand)?\\s*(?:usd\\s+)?${labelPattern}\\b`,
    'i'
  );
  const m1 = message.match(regexBefore);
  if (m1) return parseMagnitudeNumber(m1[1], m1[2]);

  const regexAfter = new RegExp(
    `${labelPattern}\\s*(?:of|is|=|:|\\bat\\b)?\\s*\\$?\\s*(\\d[\\d,]*(?:\\.\\d+)?)\\s*(b|bn|billion|m|mn|million|k|thousand)?\\b`,
    'i'
  );
  const m2 = message.match(regexAfter);
  if (m2) return parseMagnitudeNumber(m2[1], m2[2]);

  return null;
}

function extractLabeledPercent(message: string, labelPattern: string): number | null {
  const regexBefore = new RegExp(`(\\d+(?:\\.\\d+)?)\\s*%\\s*(?:yoy\\s+)?${labelPattern}\\b`, 'i');
  const m1 = message.match(regexBefore);
  if (m1) return parseFloat(m1[1]);

  const regexAfter = new RegExp(`${labelPattern}\\s*(?:of|is|=|:|\\bat\\b)?\\s*(\\d+(?:\\.\\d+)?)\\s*%`, 'i');
  const m2 = message.match(regexAfter);
  if (m2) return parseFloat(m2[1]);

  return null;
}

export function parseFinancialInputs(message: string): ParsedFinancialInputs {
  const hasArr = /\barr\b/i.test(message);
  const arrOrRevenueUsd =
    extractLabeledAmount(message, '(?:arr|annual\\s+recurring\\s+revenue)') ??
    extractLabeledAmount(message, '(?:revenue|rev|sales|ltm\\s+revenue)');

  return {
    arrOrRevenueUsd,
    arrLabel: hasArr ? 'ARR' : 'Revenue',
    growthPercent: extractLabeledPercent(message, '(?:yoy\\s+)?(?:revenue\\s+|arr\\s+)?growth(?:\\s+rate)?'),
    grossMarginPercent: extractLabeledPercent(message, 'gross\\s+margin'),
    ebitdaUsd: extractLabeledAmount(message, 'ebitda'),
    fcfUsd: extractLabeledAmount(message, '(?:fcf|free\\s+cash\\s+flow)'),
    cashUsd: extractLabeledAmount(message, 'cash(?:\\s+on\\s+hand|\\s+balance)?'),
    debtUsd: extractLabeledAmount(message, '(?:total\\s+)?debt'),
    waccPercent: extractLabeledPercent(message, '(?:wacc|discount\\s+rate)'),
    terminalGrowthPercent: extractLabeledPercent(message, 'terminal\\s+(?:growth(?:\\s+rate)?|g)'),
  };
}

export function formatCompactUsd(amount: number): string {
  const sign = amount < 0 ? '-' : '';
  const abs = Math.abs(amount);
  if (abs >= 1_000_000_000_000) return `${sign}$${(abs / 1_000_000_000_000).toFixed(2)}T`;
  if (abs >= 1_000_000_000) return `${sign}$${(abs / 1_000_000_000).toFixed(2)}B`;
  if (abs >= 1_000_000) return `${sign}$${(abs / 1_000_000).toFixed(2)}M`;
  if (abs >= 1_000) return `${sign}$${(abs / 1_000).toFixed(1)}K`;
  return `${sign}$${abs.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
}

export interface DeterministicValuationOutput {
  inputs: ParsedFinancialInputs;
  summaryMarkdown: string;
}

export function computeDeterministicValuation(message: string): DeterministicValuationOutput | null {
  const inputs = parseFinancialInputs(message);
  if (inputs.arrOrRevenueUsd === null && inputs.ebitdaUsd === null && inputs.fcfUsd === null) {
    return null;
  }

  const lines: string[] = [];
  const cash = inputs.cashUsd ?? 0;
  const debt = inputs.debtUsd ?? 0;
  const netCash = cash - debt;

  let revMidEv: number | null = null;
  let ebitdaMidEv: number | null = null;
  let dcfEv: number | null = null;

  lines.push('### Quantitative Private Valuation Model');

  if (inputs.arrOrRevenueUsd !== null && inputs.arrOrRevenueUsd > 0) {
    const g = inputs.growthPercent ?? 30;
    const gm = inputs.grossMarginPercent ?? 70;
    const ebitdaMargin =
      inputs.ebitdaUsd !== null ? (inputs.ebitdaUsd / inputs.arrOrRevenueUsd) * 100 : null;
    const ruleOf40 = ebitdaMargin !== null ? g + ebitdaMargin : null;

    let lowMult = 4.0;
    let highMult = 6.5;
    if (g >= 80) {
      lowMult = 14.0;
      highMult = 24.0;
    } else if (g >= 50) {
      lowMult = 8.5;
      highMult = 14.5;
    } else if (g >= 30) {
      lowMult = 5.5;
      highMult = 9.5;
    } else if (g >= 15) {
      lowMult = 3.5;
      highMult = 6.0;
    } else {
      lowMult = 2.0;
      highMult = 4.0;
    }

    const marginMultiplier = gm >= 75 ? 1.12 : gm >= 60 ? 1.0 : 0.82;
    const adjLowMult = Number((lowMult * marginMultiplier).toFixed(1));
    const adjHighMult = Number((highMult * marginMultiplier).toFixed(1));
    const adjMidMult = Number(((adjLowMult + adjHighMult) / 2).toFixed(1));

    const lowEv = inputs.arrOrRevenueUsd * adjLowMult;
    const highEv = inputs.arrOrRevenueUsd * adjHighMult;
    revMidEv = inputs.arrOrRevenueUsd * adjMidMult;

    lines.push(
      `- **${inputs.arrLabel} Multiple Valuation (${adjLowMult}x – ${adjHighMult}x ${inputs.arrLabel}, Mid ${adjMidMult}x)**:`
    );
    lines.push(`  - Base ${inputs.arrLabel}: **${formatCompactUsd(inputs.arrOrRevenueUsd)}** | Growth: **${g.toFixed(1)}%** | Gross Margin: **${gm.toFixed(1)}%**`);
    if (ruleOf40 !== null && ebitdaMargin !== null) {
      lines.push(`  - EBITDA Margin: **${ebitdaMargin.toFixed(1)}%** | **Rule of 40 Score**: **${ruleOf40.toFixed(1)}%**`);
    }
    lines.push(
      `  - **Implied Enterprise Value (EV)**: **${formatCompactUsd(lowEv)} – ${formatCompactUsd(highEv)}** *(Mid: ${formatCompactUsd(revMidEv)})*`
    );
    lines.push(
      `  - **Implied Equity Value** (EV + Cash ${formatCompactUsd(cash)} - Debt ${formatCompactUsd(debt)}): **${formatCompactUsd(lowEv + netCash)} – ${formatCompactUsd(highEv + netCash)}** *(Mid: ${formatCompactUsd(revMidEv + netCash)})*`
    );
  }

  if (inputs.ebitdaUsd !== null && inputs.ebitdaUsd > 0) {
    const g = inputs.growthPercent ?? 25;
    const eLow = g >= 50 ? 18 : g >= 25 ? 12 : 8;
    const eHigh = g >= 50 ? 28 : g >= 25 ? 18 : 12;
    const eMid = (eLow + eHigh) / 2;
    const lowEv = inputs.ebitdaUsd * eLow;
    const highEv = inputs.ebitdaUsd * eHigh;
    ebitdaMidEv = inputs.ebitdaUsd * eMid;

    lines.push(`- **EV / EBITDA Comps Valuation (${eLow}x – ${eHigh}x EBITDA, Mid ${eMid}x)**:`);
    lines.push(`  - Base EBITDA: **${formatCompactUsd(inputs.ebitdaUsd)}**`);
    lines.push(
      `  - **Implied Enterprise Value (EV)**: **${formatCompactUsd(lowEv)} – ${formatCompactUsd(highEv)}** *(Mid: ${formatCompactUsd(ebitdaMidEv)})*`
    );
    lines.push(
      `  - **Implied Equity Value**: **${formatCompactUsd(lowEv + netCash)} – ${formatCompactUsd(highEv + netCash)}** *(Mid: ${formatCompactUsd(ebitdaMidEv + netCash)})*`
    );
  }

  const baseCashFlow = inputs.fcfUsd ?? (inputs.ebitdaUsd !== null ? inputs.ebitdaUsd * 0.72 : null);
  if (baseCashFlow !== null && baseCashFlow > 0) {
    const wacc = (inputs.waccPercent ?? 12.0) / 100;
    const termG = Math.min((inputs.terminalGrowthPercent ?? 3.0) / 100, wacc - 0.02);
    const startGrowth = Math.min((inputs.growthPercent ?? 30) / 100, 0.65);

    let pvSum = 0;
    let cf = baseCashFlow;
    for (let yr = 1; yr <= 5; yr++) {
      const yrGrowth = startGrowth + ((termG - startGrowth) * (yr - 1)) / 4;
      cf = cf * (1 + yrGrowth);
      pvSum += cf / Math.pow(1 + wacc, yr);
    }
    const terminalVal = (cf * (1 + termG)) / (wacc - termG);
    const pvTerminal = terminalVal / Math.pow(1 + wacc, 5);
    dcfEv = pvSum + pvTerminal;

    lines.push(
      `- **5-Year Discounted Cash Flow (DCF) Valuation** *(WACC: ${(wacc * 100).toFixed(1)}%, Terminal g: ${(termG * 100).toFixed(1)}%)*:`
    );
    lines.push(`  - Year-0 Base Cash Flow: **${formatCompactUsd(baseCashFlow)}** ${inputs.fcfUsd ? '(Reported FCF)' : '(Est. FCF = 72% of EBITDA)'}`);
    lines.push(`  - PV of 5-Year Projected Cash Flows: **${formatCompactUsd(pvSum)}** | PV of Terminal Value: **${formatCompactUsd(pvTerminal)}**`);
    lines.push(`  - **DCF Enterprise Value**: **${formatCompactUsd(dcfEv)}** | **DCF Equity Value**: **${formatCompactUsd(dcfEv + netCash)}**`);
  }

  const evEstimates = [revMidEv, ebitdaMidEv, dcfEv].filter((v): v is number => v !== null && v > 0);
  if (evEstimates.length > 0) {
    const blendedEv = evEstimates.reduce((a, b) => a + b, 0) / evEstimates.length;
    const blendedEquity = blendedEv + netCash;
    const dlomLow = blendedEquity * 0.80;
    const dlomHigh = blendedEquity * 0.85;
    lines.push(`- **Blended Private Valuation & DLOM Summary**:`);
    lines.push(`  - Blended Control / Unadjusted Equity Value: **${formatCompactUsd(blendedEquity)}**`);
    lines.push(
      `  - **Illiquidity-Adjusted Private Minority Fair Value** *(15%–20% DLOM)*: **${formatCompactUsd(dlomLow)} – ${formatCompactUsd(dlomHigh)}**`
    );
  }

  return {
    inputs,
    summaryMarkdown: lines.join('\n'),
  };
}

function formatPriceNumber(n: number): string {
  if (n >= 1000) return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (n >= 1) return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  return n.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 6 });
}

export function buildMarketAndValuationSystemContext(
  snapshot: LiveMarketSnapshot,
  message: string
): string {
  const blocks: string[] = [];

  blocks.push(`LIVE INTERNET, MARKET DATA & PRIVATE VALUATION CAPABILITIES (${snapshot.fetchedAtIso}):
- You have FULL LIVE INTERNET ACCESS (via Google Search grounding, live Google News RSS, URL Context, and live HTTP feeds) and LIVE MARKET DATA FEEDS.
- NEVER say "I do not have live internet access", "I don't have real-time market prices", or "I cannot value private companies".`);

  if (snapshot.stocks.length > 0 || snapshot.crypto.length > 0 || snapshot.fx.length > 0) {
    const feedLines: string[] = ['VERIFIED LIVE MARKET DATA SNAPSHOT (USE THESE EXACT FIGURES IN YOUR ANSWER):'];

    for (const s of snapshot.stocks) {
      const chg =
        s.change !== null && s.changePercent !== null
          ? ` | Change: ${s.change >= 0 ? '+' : ''}${s.change.toFixed(2)} (${s.changePercent >= 0 ? '+' : ''}${s.changePercent.toFixed(2)}%)`
          : '';
      const range =
        s.low52Week !== null && s.high52Week !== null
          ? ` | 52W Range: ${formatPriceNumber(s.low52Week)}–${formatPriceNumber(s.high52Week)}`
          : '';
      feedLines.push(
        `- [EQUITY/COMMODITY] ${s.name} (${s.symbol}, ${s.exchange}): **${formatPriceNumber(s.price)} ${s.currency}**${chg}${range}${
          s.marketTimeIso ? ` | Market Timestamp: ${s.marketTimeIso}` : ''
        }`
      );
    }

    for (const c of snapshot.crypto) {
      const chg =
        c.change24hPercent !== null
          ? ` | 24h: ${c.change24hPercent >= 0 ? '+' : ''}${c.change24hPercent.toFixed(2)}%`
          : '';
      const mcap = c.marketCapUsd !== null ? ` | Market Cap: ${formatCompactUsd(c.marketCapUsd)}` : '';
      const vol = c.volume24hUsd !== null ? ` | 24h Vol: ${formatCompactUsd(c.volume24hUsd)}` : '';
      feedLines.push(
        `- [CRYPTO SPOT] ${c.name} (${c.symbol}): **$${formatPriceNumber(c.priceUsd)} USD**${chg}${mcap}${vol}`
      );
    }

    for (const f of snapshot.fx) {
      const amtStr =
        f.amount !== 1
          ? ` | ${f.amount.toLocaleString('en-US')} ${f.base} = **${formatPriceNumber(f.convertedAmount)} ${f.quote}**`
          : '';
      feedLines.push(
        `- [FX RATE] ${f.pair}: **1 ${f.base} = ${formatPriceNumber(f.rate)} ${f.quote}**${amtStr}${
          f.updatedUtc ? ` | Updated: ${f.updatedUtc}` : ''
        }`
      );
    }

    blocks.push(feedLines.join('\n'));
  }

  if (snapshot.webResults.length > 0) {
    const webLines = ['LIVE INTERNET SEARCH & NEWS GROUNDING RESULTS (FETCHED IN REAL TIME):'];
    for (const r of snapshot.webResults) {
      webLines.push(
        `- [${r.source}${r.publishedAt ? ` · ${r.publishedAt}` : ''}] **${r.title}** — ${r.url}${
          r.snippet ? `\n  Snippet: ${r.snippet}` : ''
        }`
      );
    }
    blocks.push(webLines.join('\n'));
  }

  if (snapshot.fetchedUrls.length > 0) {
    const urlLines = ['LIVE FETCHED URL PAGE CONTENT:'];
    for (const u of snapshot.fetchedUrls) {
      urlLines.push(`- **${u.title}** (${u.url}):\n  ${u.snippet}`);
    }
    blocks.push(urlLines.join('\n'));
  }

  if (snapshot.hasValuationIntent) {
    const det = computeDeterministicValuation(message);
    blocks.push(`PRIVATE VALUATION & INSTITUTIONAL FINANCE PROTOCOL:
- Act as an Institutional Private Equity / Venture Capital Valuation Principal.
- For named private companies (${snapshot.namedPrivateCompanies.length > 0 ? snapshot.namedPrivateCompanies.join(', ') : 'startups / private firms'}), synthesize the LATEST live internet reporting above and Google Search grounding for funding rounds, post-money valuation, tender offers, IPO status, and secondary-market pricing with clear dates & sources.
- For company/startup financial modeling, apply full methodology:
  1. Revenue / ARR & EBITDA Trading & Precedent Multiples (Rule of 40 & Gross Margin calibrated)
  2. Enterprise Value (EV) to Equity Value bridge (\`Equity Value = EV + Cash - Debt\`)
  3. 5-Year DCF Valuation (WACC, Terminal Value via Gordon Growth & Exit Multiple)
  4. Private Market DLOM (Discount for Lack of Marketability, typically 15%–25% for minority stakes) & VC/409A considerations.
- Format outputs with clean Markdown headings and bullet lists (never raw pipe tables).`);

    if (det) {
      blocks.push(
        `VERIFIED QUANTITATIVE COMPUTATION FOR USER'S METRICS (INCLUDE THESE EXACT CALCULATIONS & WALK THROUGH THE ASSUMPTIONS):\n${det.summaryMarkdown}`
      );
    }
  }

  return blocks.join('\n\n');
}

export function extractSnapshotWebSources(snapshot: LiveMarketSnapshot): Array<{ title: string; url: string }> {
  const dedup = new Map<string, { title: string; url: string }>();
  for (const r of snapshot.webResults) {
    if (r.url && !dedup.has(r.url)) {
      dedup.set(r.url, { title: `${r.title} (${r.source})`, url: r.url });
    }
  }
  for (const u of snapshot.fetchedUrls) {
    if (u.url && !dedup.has(u.url)) {
      dedup.set(u.url, { title: u.title || u.url, url: u.url });
    }
  }
  return Array.from(dedup.values()).slice(0, 8);
}

export function mergeSources(
  primary?: Array<{ title: string; url: string }>,
  secondary?: Array<{ title: string; url: string }>
): Array<{ title: string; url: string }> | undefined {
  const dedup = new Map<string, { title: string; url: string }>();
  for (const s of [...(primary || []), ...(secondary || [])]) {
    if (s?.url && !dedup.has(s.url)) {
      dedup.set(s.url, { title: s.title || s.url, url: s.url });
    }
  }
  return dedup.size > 0 ? Array.from(dedup.values()).slice(0, 8) : undefined;
}

export function buildOfflineMarketAndValuationFallback(
  snapshot: LiveMarketSnapshot,
  message: string
): string | null {
  const sections: string[] = [];

  if (snapshot.stocks.length > 0 || snapshot.crypto.length > 0 || snapshot.fx.length > 0) {
    const lines: string[] = [`### Live Market Data Snapshot (${new Date().toUTCString()})`];

    if (snapshot.stocks.length > 0) {
      lines.push('', '**Equities, Indices & Commodities:**');
      for (const s of snapshot.stocks) {
        const chg =
          s.change !== null && s.changePercent !== null
            ? ` (${s.change >= 0 ? '+' : ''}${s.change.toFixed(2)}, ${s.changePercent >= 0 ? '+' : ''}${s.changePercent.toFixed(2)}%)`
            : '';
        lines.push(`- **${s.name} (${s.symbol})**: **${formatPriceNumber(s.price)} ${s.currency}**${chg} — *${s.exchange}*`);
      }
    }

    if (snapshot.crypto.length > 0) {
      lines.push('', '**Cryptocurrencies (Live USD Spot):**');
      for (const c of snapshot.crypto) {
        const chg =
          c.change24hPercent !== null
            ? ` (24h: ${c.change24hPercent >= 0 ? '+' : ''}${c.change24hPercent.toFixed(2)}%)`
            : '';
        const mcap = c.marketCapUsd !== null ? ` · Market Cap: ${formatCompactUsd(c.marketCapUsd)}` : '';
        lines.push(`- **${c.name} (${c.symbol})**: **$${formatPriceNumber(c.priceUsd)}**${chg}${mcap}`);
      }
    }

    if (snapshot.fx.length > 0) {
      lines.push('', '**Foreign Exchange Rates (Live):**');
      for (const f of snapshot.fx) {
        const extra =
          f.amount !== 1
            ? ` → **${f.amount.toLocaleString('en-US')} ${f.base} = ${formatPriceNumber(f.convertedAmount)} ${f.quote}**`
            : '';
        lines.push(`- **${f.pair}**: **1 ${f.base} = ${formatPriceNumber(f.rate)} ${f.quote}**${extra}`);
      }
    }

    sections.push(lines.join('\n'));
  }

  if (snapshot.hasValuationIntent) {
    const det = computeDeterministicValuation(message);
    if (det) {
      sections.push(det.summaryMarkdown);
    }
  }

  if (snapshot.webResults.length > 0) {
    const title = snapshot.hasValuationIntent
      ? '### Latest Private Market & Valuation Intelligence (Live Web)'
      : `### Live Internet Web & News Results (${new Date().toUTCString()})`;
    const webLines: string[] = [title];
    for (const r of snapshot.webResults) {
      const dateTag = r.publishedAt ? ` *(${r.publishedAt})*` : '';
      const snippetTag = r.snippet ? `\n  > ${r.snippet}` : '';
      webLines.push(`- **${r.title}** — *${r.source}*${dateTag}${snippetTag}`);
    }
    sections.push(webLines.join('\n'));
  }

  if (snapshot.fetchedUrls.length > 0) {
    const urlLines: string[] = ['### Live URL Content Summary'];
    for (const u of snapshot.fetchedUrls) {
      urlLines.push(`- **${u.title}** (${u.url}): ${u.snippet.slice(0, 600)}...`);
    }
    sections.push(urlLines.join('\n'));
  }

  if (sections.length === 0) return null;
  return sections.join('\n\n---\n\n');
}
