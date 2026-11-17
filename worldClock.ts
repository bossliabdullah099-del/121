export interface CountryTimeEntry {
  country: string;
  region:
    | 'Asia'
    | 'Middle East'
    | 'Europe'
    | 'North America'
    | 'Central America & Caribbean'
    | 'South America'
    | 'Africa'
    | 'Oceania';
  zone: string;
  aliases?: string[];
  note?: string;
}

export const WORLD_COUNTRIES: CountryTimeEntry[] = [
  // Asia
  { country: 'Afghanistan', region: 'Asia', zone: 'Asia/Kabul', aliases: ['kabul'] },
  { country: 'Armenia', region: 'Asia', zone: 'Asia/Yerevan', aliases: ['yerevan'] },
  { country: 'Azerbaijan', region: 'Asia', zone: 'Asia/Baku', aliases: ['baku'] },
  { country: 'Bangladesh', region: 'Asia', zone: 'Asia/Dhaka', aliases: ['dhaka'] },
  { country: 'Bhutan', region: 'Asia', zone: 'Asia/Thimphu', aliases: ['thimphu'] },
  { country: 'Brunei', region: 'Asia', zone: 'Asia/Brunei', aliases: ['bandar seri begawan'] },
  { country: 'Cambodia', region: 'Asia', zone: 'Asia/Phnom_Penh', aliases: ['phnom penh'] },
  { country: 'China', region: 'Asia', zone: 'Asia/Shanghai', aliases: ['beijing', 'shanghai', 'guangzhou', 'shenzhen'] },
  { country: 'Georgia', region: 'Asia', zone: 'Asia/Tbilisi', aliases: ['tbilisi'] },
  { country: 'India', region: 'Asia', zone: 'Asia/Kolkata', aliases: ['delhi', 'new delhi', 'mumbai', 'bangalore', 'kolkata', 'chennai', 'hyderabad'] },
  { country: 'Indonesia (WIB)', region: 'Asia', zone: 'Asia/Jakarta', aliases: ['indonesia', 'jakarta', 'bali'], note: 'WIB (Jakarta); WITA/WIT +1/+2h' },
  { country: 'Japan', region: 'Asia', zone: 'Asia/Tokyo', aliases: ['tokyo', 'osaka', 'kyoto'] },
  { country: 'Kazakhstan', region: 'Asia', zone: 'Asia/Almaty', aliases: ['almaty', 'astana'] },
  { country: 'Kyrgyzstan', region: 'Asia', zone: 'Asia/Bishkek', aliases: ['bishkek'] },
  { country: 'Laos', region: 'Asia', zone: 'Asia/Vientiane', aliases: ['vientiane'] },
  { country: 'Malaysia', region: 'Asia', zone: 'Asia/Kuala_Lumpur', aliases: ['kuala lumpur', 'kl'] },
  { country: 'Maldives', region: 'Asia', zone: 'Indian/Maldives', aliases: ['male'] },
  { country: 'Mongolia', region: 'Asia', zone: 'Asia/Ulaanbaatar', aliases: ['ulaanbaatar'] },
  { country: 'Myanmar', region: 'Asia', zone: 'Asia/Yangon', aliases: ['burma', 'yangon'] },
  { country: 'Nepal', region: 'Asia', zone: 'Asia/Kathmandu', aliases: ['kathmandu'] },
  { country: 'North Korea', region: 'Asia', zone: 'Asia/Pyongyang', aliases: ['pyongyang'] },
  { country: 'Pakistan', region: 'Asia', zone: 'Asia/Karachi', aliases: ['karachi', 'lahore', 'islamabad', 'rawalpindi', 'peshawar', 'quetta', 'multan', 'faisalabad'] },
  { country: 'Philippines', region: 'Asia', zone: 'Asia/Manila', aliases: ['manila'] },
  { country: 'Singapore', region: 'Asia', zone: 'Asia/Singapore' },
  { country: 'South Korea', region: 'Asia', zone: 'Asia/Seoul', aliases: ['korea', 'seoul', 'busan'] },
  { country: 'Sri Lanka', region: 'Asia', zone: 'Asia/Colombo', aliases: ['colombo'] },
  { country: 'Taiwan', region: 'Asia', zone: 'Asia/Taipei', aliases: ['taipei'] },
  { country: 'Tajikistan', region: 'Asia', zone: 'Asia/Dushanbe', aliases: ['dushanbe'] },
  { country: 'Thailand', region: 'Asia', zone: 'Asia/Bangkok', aliases: ['bangkok'] },
  { country: 'Timor-Leste', region: 'Asia', zone: 'Asia/Dili', aliases: ['east timor', 'dili'] },
  { country: 'Turkmenistan', region: 'Asia', zone: 'Asia/Ashgabat', aliases: ['ashgabat'] },
  { country: 'Uzbekistan', region: 'Asia', zone: 'Asia/Tashkent', aliases: ['tashkent'] },
  { country: 'Vietnam', region: 'Asia', zone: 'Asia/Ho_Chi_Minh', aliases: ['hanoi', 'ho chi minh', 'saigon'] },

  // Middle East
  { country: 'Bahrain', region: 'Middle East', zone: 'Asia/Bahrain', aliases: ['manama'] },
  { country: 'Cyprus', region: 'Middle East', zone: 'Asia/Nicosia', aliases: ['nicosia'] },
  { country: 'Iran', region: 'Middle East', zone: 'Asia/Tehran', aliases: ['tehran'] },
  { country: 'Iraq', region: 'Middle East', zone: 'Asia/Baghdad', aliases: ['baghdad'] },
  { country: 'Israel', region: 'Middle East', zone: 'Asia/Jerusalem', aliases: ['jerusalem', 'tel aviv'] },
  { country: 'Jordan', region: 'Middle East', zone: 'Asia/Amman', aliases: ['amman'] },
  { country: 'Kuwait', region: 'Middle East', zone: 'Asia/Kuwait' },
  { country: 'Lebanon', region: 'Middle East', zone: 'Asia/Beirut', aliases: ['beirut'] },
  { country: 'Oman', region: 'Middle East', zone: 'Asia/Muscat', aliases: ['muscat'] },
  { country: 'Palestine', region: 'Middle East', zone: 'Asia/Hebron', aliases: ['gaza', 'ramallah'] },
  { country: 'Qatar', region: 'Middle East', zone: 'Asia/Qatar', aliases: ['doha'] },
  { country: 'Saudi Arabia', region: 'Middle East', zone: 'Asia/Riyadh', aliases: ['ksa', 'riyadh', 'jeddah', 'makkah', 'mecca', 'madinah', 'medina'] },
  { country: 'Syria', region: 'Middle East', zone: 'Asia/Damascus', aliases: ['damascus'] },
  { country: 'Turkey', region: 'Middle East', zone: 'Europe/Istanbul', aliases: ['turkiye', 'istanbul', 'ankara'] },
  { country: 'United Arab Emirates', region: 'Middle East', zone: 'Asia/Dubai', aliases: ['uae', 'dubai', 'abu dhabi', 'sharjah'] },
  { country: 'Yemen', region: 'Middle East', zone: 'Asia/Aden', aliases: ['sanaa'] },

  // Europe
  { country: 'Albania', region: 'Europe', zone: 'Europe/Tirane', aliases: ['tirana'] },
  { country: 'Andorra', region: 'Europe', zone: 'Europe/Andorra' },
  { country: 'Austria', region: 'Europe', zone: 'Europe/Vienna', aliases: ['vienna'] },
  { country: 'Belarus', region: 'Europe', zone: 'Europe/Minsk', aliases: ['minsk'] },
  { country: 'Belgium', region: 'Europe', zone: 'Europe/Brussels', aliases: ['brussels'] },
  { country: 'Bosnia and Herzegovina', region: 'Europe', zone: 'Europe/Sarajevo', aliases: ['bosnia', 'sarajevo'] },
  { country: 'Bulgaria', region: 'Europe', zone: 'Europe/Sofia', aliases: ['sofia'] },
  { country: 'Croatia', region: 'Europe', zone: 'Europe/Zagreb', aliases: ['zagreb'] },
  { country: 'Czechia', region: 'Europe', zone: 'Europe/Prague', aliases: ['czech republic', 'prague'] },
  { country: 'Denmark', region: 'Europe', zone: 'Europe/Copenhagen', aliases: ['copenhagen'] },
  { country: 'Estonia', region: 'Europe', zone: 'Europe/Tallinn', aliases: ['tallinn'] },
  { country: 'Finland', region: 'Europe', zone: 'Europe/Helsinki', aliases: ['helsinki'] },
  { country: 'France', region: 'Europe', zone: 'Europe/Paris', aliases: ['paris', 'lyon', 'marseille'] },
  { country: 'Germany', region: 'Europe', zone: 'Europe/Berlin', aliases: ['berlin', 'munich', 'frankfurt'] },
  { country: 'Greece', region: 'Europe', zone: 'Europe/Athens', aliases: ['athens'] },
  { country: 'Hungary', region: 'Europe', zone: 'Europe/Budapest', aliases: ['budapest'] },
  { country: 'Iceland', region: 'Europe', zone: 'Atlantic/Reykjavik', aliases: ['reykjavik'] },
  { country: 'Ireland', region: 'Europe', zone: 'Europe/Dublin', aliases: ['dublin'] },
  { country: 'Italy', region: 'Europe', zone: 'Europe/Rome', aliases: ['rome', 'milan'] },
  { country: 'Kosovo', region: 'Europe', zone: 'Europe/Belgrade', aliases: ['pristina'] },
  { country: 'Latvia', region: 'Europe', zone: 'Europe/Riga', aliases: ['riga'] },
  { country: 'Liechtenstein', region: 'Europe', zone: 'Europe/Vaduz', aliases: ['vaduz'] },
  { country: 'Lithuania', region: 'Europe', zone: 'Europe/Vilnius', aliases: ['vilnius'] },
  { country: 'Luxembourg', region: 'Europe', zone: 'Europe/Luxembourg' },
  { country: 'Malta', region: 'Europe', zone: 'Europe/Malta', aliases: ['valletta'] },
  { country: 'Moldova', region: 'Europe', zone: 'Europe/Chisinau', aliases: ['chisinau'] },
  { country: 'Monaco', region: 'Europe', zone: 'Europe/Monaco' },
  { country: 'Montenegro', region: 'Europe', zone: 'Europe/Podgorica', aliases: ['podgorica'] },
  { country: 'Netherlands', region: 'Europe', zone: 'Europe/Amsterdam', aliases: ['holland', 'amsterdam'] },
  { country: 'North Macedonia', region: 'Europe', zone: 'Europe/Skopje', aliases: ['skopje'] },
  { country: 'Norway', region: 'Europe', zone: 'Europe/Oslo', aliases: ['oslo'] },
  { country: 'Poland', region: 'Europe', zone: 'Europe/Warsaw', aliases: ['warsaw'] },
  { country: 'Portugal', region: 'Europe', zone: 'Europe/Lisbon', aliases: ['lisbon'] },
  { country: 'Romania', region: 'Europe', zone: 'Europe/Bucharest', aliases: ['bucharest'] },
  { country: 'Russia (Moscow)', region: 'Europe', zone: 'Europe/Moscow', aliases: ['russia', 'moscow', 'st petersburg'], note: 'Moscow (UTC+3); spans UTC+2 to UTC+12' },
  { country: 'San Marino', region: 'Europe', zone: 'Europe/San_Marino' },
  { country: 'Serbia', region: 'Europe', zone: 'Europe/Belgrade', aliases: ['belgrade'] },
  { country: 'Slovakia', region: 'Europe', zone: 'Europe/Bratislava', aliases: ['bratislava'] },
  { country: 'Slovenia', region: 'Europe', zone: 'Europe/Ljubljana', aliases: ['ljubljana'] },
  { country: 'Spain', region: 'Europe', zone: 'Europe/Madrid', aliases: ['madrid', 'barcelona'] },
  { country: 'Sweden', region: 'Europe', zone: 'Europe/Stockholm', aliases: ['stockholm'] },
  { country: 'Switzerland', region: 'Europe', zone: 'Europe/Zurich', aliases: ['zurich', 'geneva'] },
  { country: 'Ukraine', region: 'Europe', zone: 'Europe/Kyiv', aliases: ['kyiv', 'kiev'] },
  { country: 'United Kingdom', region: 'Europe', zone: 'Europe/London', aliases: ['uk', 'britain', 'england', 'london', 'manchester', 'scotland'] },
  { country: 'Vatican City', region: 'Europe', zone: 'Europe/Vatican' },

  // North America
  { country: 'Canada (Eastern)', region: 'North America', zone: 'America/Toronto', aliases: ['canada', 'toronto', 'ottawa', 'montreal'], note: 'Eastern; spans Pacific to Newfoundland' },
  { country: 'Canada (Pacific)', region: 'North America', zone: 'America/Vancouver', aliases: ['vancouver'] },
  { country: 'Mexico', region: 'North America', zone: 'America/Mexico_City', aliases: ['mexico city', 'cancun'] },
  { country: 'United States (Eastern)', region: 'North America', zone: 'America/New_York', aliases: ['usa', 'united states', 'america', 'new york', 'nyc', 'washington', 'miami', 'boston'], note: 'ET; CT -1h, MT -2h, PT -3h' },
  { country: 'United States (Central)', region: 'North America', zone: 'America/Chicago', aliases: ['chicago', 'dallas', 'houston', 'texas'] },
  { country: 'United States (Pacific)', region: 'North America', zone: 'America/Los_Angeles', aliases: ['los angeles', 'san francisco', 'california', 'seattle'] },

  // Central America & Caribbean
  { country: 'Antigua and Barbuda', region: 'Central America & Caribbean', zone: 'America/Antigua' },
  { country: 'Bahamas', region: 'Central America & Caribbean', zone: 'America/Nassau', aliases: ['nassau'] },
  { country: 'Barbados', region: 'Central America & Caribbean', zone: 'America/Barbados' },
  { country: 'Belize', region: 'Central America & Caribbean', zone: 'America/Belize' },
  { country: 'Costa Rica', region: 'Central America & Caribbean', zone: 'America/Costa_Rica' },
  { country: 'Cuba', region: 'Central America & Caribbean', zone: 'America/Havana', aliases: ['havana'] },
  { country: 'Dominica', region: 'Central America & Caribbean', zone: 'America/Dominica' },
  { country: 'Dominican Republic', region: 'Central America & Caribbean', zone: 'America/Santo_Domingo' },
  { country: 'El Salvador', region: 'Central America & Caribbean', zone: 'America/El_Salvador' },
  { country: 'Grenada', region: 'Central America & Caribbean', zone: 'America/Grenada' },
  { country: 'Guatemala', region: 'Central America & Caribbean', zone: 'America/Guatemala' },
  { country: 'Haiti', region: 'Central America & Caribbean', zone: 'America/Port-au-Prince' },
  { country: 'Honduras', region: 'Central America & Caribbean', zone: 'America/Tegucigalpa' },
  { country: 'Jamaica', region: 'Central America & Caribbean', zone: 'America/Jamaica', aliases: ['kingston'] },
  { country: 'Nicaragua', region: 'Central America & Caribbean', zone: 'America/Managua' },
  { country: 'Panama', region: 'Central America & Caribbean', zone: 'America/Panama' },
  { country: 'Saint Kitts and Nevis', region: 'Central America & Caribbean', zone: 'America/St_Kitts' },
  { country: 'Saint Lucia', region: 'Central America & Caribbean', zone: 'America/St_Lucia' },
  { country: 'Saint Vincent & Grenadines', region: 'Central America & Caribbean', zone: 'America/St_Vincent' },
  { country: 'Trinidad and Tobago', region: 'Central America & Caribbean', zone: 'America/Port_of_Spain' },

  // South America
  { country: 'Argentina', region: 'South America', zone: 'America/Argentina/Buenos_Aires', aliases: ['buenos aires'] },
  { country: 'Bolivia', region: 'South America', zone: 'America/La_Paz', aliases: ['la paz'] },
  { country: 'Brazil', region: 'South America', zone: 'America/Sao_Paulo', aliases: ['sao paulo', 'rio', 'brasilia'] },
  { country: 'Chile', region: 'South America', zone: 'America/Santiago', aliases: ['santiago'] },
  { country: 'Colombia', region: 'South America', zone: 'America/Bogota', aliases: ['bogota'] },
  { country: 'Ecuador', region: 'South America', zone: 'America/Guayaquil', aliases: ['quito'] },
  { country: 'Guyana', region: 'South America', zone: 'America/Guyana' },
  { country: 'Paraguay', region: 'South America', zone: 'America/Asuncion', aliases: ['asuncion'] },
  { country: 'Peru', region: 'South America', zone: 'America/Lima', aliases: ['lima'] },
  { country: 'Suriname', region: 'South America', zone: 'America/Paramaribo' },
  { country: 'Uruguay', region: 'South America', zone: 'America/Montevideo', aliases: ['montevideo'] },
  { country: 'Venezuela', region: 'South America', zone: 'America/Caracas', aliases: ['caracas'] },

  // Africa
  { country: 'Algeria', region: 'Africa', zone: 'Africa/Algiers', aliases: ['algiers'] },
  { country: 'Angola', region: 'Africa', zone: 'Africa/Luanda', aliases: ['luanda'] },
  { country: 'Benin', region: 'Africa', zone: 'Africa/Porto-Novo' },
  { country: 'Botswana', region: 'Africa', zone: 'Africa/Gaborone' },
  { country: 'Burkina Faso', region: 'Africa', zone: 'Africa/Ouagadougou' },
  { country: 'Burundi', region: 'Africa', zone: 'Africa/Bujumbura' },
  { country: 'Cabo Verde', region: 'Africa', zone: 'Atlantic/Cape_Verde', aliases: ['cape verde'] },
  { country: 'Cameroon', region: 'Africa', zone: 'Africa/Douala' },
  { country: 'Central African Republic', region: 'Africa', zone: 'Africa/Bangui' },
  { country: 'Chad', region: 'Africa', zone: 'Africa/Ndjamena' },
  { country: 'Comoros', region: 'Africa', zone: 'Indian/Comoro' },
  { country: 'Congo (Brazzaville)', region: 'Africa', zone: 'Africa/Brazzaville' },
  { country: 'Congo (DR / Kinshasa)', region: 'Africa', zone: 'Africa/Kinshasa', aliases: ['dr congo', 'kinshasa'] },
  { country: "Côte d'Ivoire", region: 'Africa', zone: 'Africa/Abidjan', aliases: ['ivory coast', 'abidjan'] },
  { country: 'Djibouti', region: 'Africa', zone: 'Africa/Djibouti' },
  { country: 'Egypt', region: 'Africa', zone: 'Africa/Cairo', aliases: ['cairo'] },
  { country: 'Equatorial Guinea', region: 'Africa', zone: 'Africa/Malabo' },
  { country: 'Eritrea', region: 'Africa', zone: 'Africa/Asmara' },
  { country: 'Eswatini', region: 'Africa', zone: 'Africa/Mbabane', aliases: ['swaziland'] },
  { country: 'Ethiopia', region: 'Africa', zone: 'Africa/Addis_Ababa', aliases: ['addis ababa'] },
  { country: 'Gabon', region: 'Africa', zone: 'Africa/Libreville' },
  { country: 'Gambia', region: 'Africa', zone: 'Africa/Banjul' },
  { country: 'Ghana', region: 'Africa', zone: 'Africa/Accra', aliases: ['accra'] },
  { country: 'Guinea', region: 'Africa', zone: 'Africa/Conakry' },
  { country: 'Guinea-Bissau', region: 'Africa', zone: 'Africa/Bissau' },
  { country: 'Kenya', region: 'Africa', zone: 'Africa/Nairobi', aliases: ['nairobi'] },
  { country: 'Lesotho', region: 'Africa', zone: 'Africa/Maseru' },
  { country: 'Liberia', region: 'Africa', zone: 'Africa/Monrovia' },
  { country: 'Libya', region: 'Africa', zone: 'Africa/Tripoli', aliases: ['tripoli'] },
  { country: 'Madagascar', region: 'Africa', zone: 'Indian/Antananarivo' },
  { country: 'Malawi', region: 'Africa', zone: 'Africa/Blantyre' },
  { country: 'Mali', region: 'Africa', zone: 'Africa/Bamako' },
  { country: 'Mauritania', region: 'Africa', zone: 'Africa/Nouakchott' },
  { country: 'Mauritius', region: 'Africa', zone: 'Indian/Mauritius' },
  { country: 'Morocco', region: 'Africa', zone: 'Africa/Casablanca', aliases: ['casablanca', 'rabat'] },
  { country: 'Mozambique', region: 'Africa', zone: 'Africa/Maputo' },
  { country: 'Namibia', region: 'Africa', zone: 'Africa/Windhoek' },
  { country: 'Niger', region: 'Africa', zone: 'Africa/Niamey' },
  { country: 'Nigeria', region: 'Africa', zone: 'Africa/Lagos', aliases: ['lagos', 'abuja'] },
  { country: 'Rwanda', region: 'Africa', zone: 'Africa/Kigali', aliases: ['kigali'] },
  { country: 'São Tomé and Príncipe', region: 'Africa', zone: 'Africa/Sao_Tome' },
  { country: 'Senegal', region: 'Africa', zone: 'Africa/Dakar', aliases: ['dakar'] },
  { country: 'Seychelles', region: 'Africa', zone: 'Indian/Mahe' },
  { country: 'Sierra Leone', region: 'Africa', zone: 'Africa/Freetown' },
  { country: 'Somalia', region: 'Africa', zone: 'Africa/Mogadishu', aliases: ['mogadishu'] },
  { country: 'South Africa', region: 'Africa', zone: 'Africa/Johannesburg', aliases: ['johannesburg', 'cape town'] },
  { country: 'South Sudan', region: 'Africa', zone: 'Africa/Juba', aliases: ['juba'] },
  { country: 'Sudan', region: 'Africa', zone: 'Africa/Khartoum', aliases: ['khartoum'] },
  { country: 'Tanzania', region: 'Africa', zone: 'Africa/Dar_es_Salaam', aliases: ['dar es salaam'] },
  { country: 'Togo', region: 'Africa', zone: 'Africa/Lome' },
  { country: 'Tunisia', region: 'Africa', zone: 'Africa/Tunis', aliases: ['tunis'] },
  { country: 'Uganda', region: 'Africa', zone: 'Africa/Kampala', aliases: ['kampala'] },
  { country: 'Zambia', region: 'Africa', zone: 'Africa/Lusaka', aliases: ['lusaka'] },
  { country: 'Zimbabwe', region: 'Africa', zone: 'Africa/Harare', aliases: ['harare'] },

  // Oceania
  { country: 'Australia (Sydney / Melbourne)', region: 'Oceania', zone: 'Australia/Sydney', aliases: ['australia', 'sydney', 'melbourne', 'canberra'], note: 'AET; Perth (AWST) is -3h' },
  { country: 'Australia (Perth)', region: 'Oceania', zone: 'Australia/Perth', aliases: ['perth'] },
  { country: 'Fiji', region: 'Oceania', zone: 'Pacific/Fiji', aliases: ['suva'] },
  { country: 'Kiribati', region: 'Oceania', zone: 'Pacific/Tarawa' },
  { country: 'Marshall Islands', region: 'Oceania', zone: 'Pacific/Majuro' },
  { country: 'Micronesia', region: 'Oceania', zone: 'Pacific/Pohnpei' },
  { country: 'Nauru', region: 'Oceania', zone: 'Pacific/Nauru' },
  { country: 'New Zealand', region: 'Oceania', zone: 'Pacific/Auckland', aliases: ['auckland', 'wellington'] },
  { country: 'Palau', region: 'Oceania', zone: 'Pacific/Palau' },
  { country: 'Papua New Guinea', region: 'Oceania', zone: 'Pacific/Port_Moresby' },
  { country: 'Samoa', region: 'Oceania', zone: 'Pacific/Apia' },
  { country: 'Solomon Islands', region: 'Oceania', zone: 'Pacific/Guadalcanal' },
  { country: 'Tonga', region: 'Oceania', zone: 'Pacific/Tongatapu' },
  { country: 'Tuvalu', region: 'Oceania', zone: 'Pacific/Funafuti' },
  { country: 'Vanuatu', region: 'Oceania', zone: 'Pacific/Efate' },
];

export interface FormattedTimeInfo {
  weekday: string;
  shortDate: string;
  fullDate: string;
  time12: string;
  time24: string;
  offset: string;
}

export function isValidTimeZone(tz?: string): tz is string {
  if (!tz || typeof tz !== 'string') return false;
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: tz }).format(new Date());
    return true;
  } catch {
    return false;
  }
}

export function getFormattedZoneInfo(now: Date, timeZone: string): FormattedTimeInfo {
  const safeZone = isValidTimeZone(timeZone) ? timeZone : 'UTC';
  const weekday = new Intl.DateTimeFormat('en-US', { timeZone: safeZone, weekday: 'long' }).format(now);
  const shortDate = new Intl.DateTimeFormat('en-US', {
    timeZone: safeZone,
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(now);
  const fullDate = new Intl.DateTimeFormat('en-US', {
    timeZone: safeZone,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(now);
  const time12 = new Intl.DateTimeFormat('en-US', {
    timeZone: safeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(now);
  const time24 = new Intl.DateTimeFormat('en-GB', {
    timeZone: safeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);
  const offsetParts = new Intl.DateTimeFormat('en-US', {
    timeZone: safeZone,
    timeZoneName: 'shortOffset',
  }).formatToParts(now);
  const offset = offsetParts.find((p) => p.type === 'timeZoneName')?.value || 'UTC';

  return { weekday, shortDate, fullDate, time12, time24, offset };
}

export function findMentionedCountries(text: string): CountryTimeEntry[] {
  if (!text) return [];
  const lower = text.toLowerCase();
  const matches: CountryTimeEntry[] = [];
  const seenZones = new Set<string>();

  for (const entry of WORLD_COUNTRIES) {
    const terms = [entry.country.toLowerCase().replace(/\s*\(.*?\)/g, ''), ...(entry.aliases || [])];
    const matched = terms.some((term) => {
      if (!term || term.length < 2) return false;
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp(`\\b${escaped}\\b`, 'i').test(lower);
    });
    if (matched && !seenZones.has(`${entry.country}:${entry.zone}`)) {
      seenZones.add(`${entry.country}:${entry.zone}`);
      matches.push(entry);
    }
  }
  return matches;
}

export function isAllCountriesTimeQuery(message: string): boolean {
  if (!message) return false;
  const lower = message.toLowerCase().trim();
  const asksAllCountries =
    /\b(every\s+countr(y|ies)|all\s+countr(y|ies)|each\s+countr(y|ies)|every\s+time\s*zone|all\s+time\s*zones|world\s+clock|global\s+time|har\s+mulk|sab\s+mulk|duniya\s+ke\s+(har|sab)\s+mulk|around\s+the\s+world)\b/i.test(
      lower
    );
  const asksTimeOrDay = /\b(time|clock|waqt|date|day|timezone|timezones|din)\b/i.test(lower);
  return asksAllCountries && asksTimeOrDay;
}

export function buildLiveClockContext(userTimeZone?: string, userMessage?: string): string {
  const now = new Date();
  const utc = getFormattedZoneInfo(now, 'UTC');
  const validUserTz = isValidTimeZone(userTimeZone) ? userTimeZone : undefined;
  const localInfo = validUserTz ? getFormattedZoneInfo(now, validUserTz) : null;

  const mentioned = userMessage ? findMentionedCountries(userMessage) : [];
  const keyHubZones: CountryTimeEntry[] = [
    { country: 'Pakistan', region: 'Asia', zone: 'Asia/Karachi' },
    { country: 'India', region: 'Asia', zone: 'Asia/Kolkata' },
    { country: 'Saudi Arabia', region: 'Middle East', zone: 'Asia/Riyadh' },
    { country: 'UAE (Dubai)', region: 'Middle East', zone: 'Asia/Dubai' },
    { country: 'United Kingdom (London)', region: 'Europe', zone: 'Europe/London' },
    { country: 'USA (New York ET)', region: 'North America', zone: 'America/New_York' },
    { country: 'USA (Los Angeles PT)', region: 'North America', zone: 'America/Los_Angeles' },
    { country: 'Japan (Tokyo)', region: 'Asia', zone: 'Asia/Tokyo' },
    { country: 'Australia (Sydney)', region: 'Oceania', zone: 'Australia/Sydney' },
  ];

  const combined = [...mentioned];
  for (const hub of keyHubZones) {
    if (!combined.some((m) => m.zone === hub.zone)) {
      combined.push(hub);
    }
  }

  const hubLines = combined
    .slice(0, 20)
    .map((c) => {
      const info = getFormattedZoneInfo(now, c.zone);
      return `  * ${c.country} (${c.zone}): ${info.weekday}, ${info.shortDate} · ${info.time12} (${info.time24}, ${info.offset})`;
    })
    .join('\n');

  return `AUTHORITATIVE REAL-TIME LIVE CLOCK & WORLD TIME DATA (COMPUTED RIGHT NOW):
- Current UTC Day & Date: ${utc.fullDate}
- Current UTC Time: ${utc.time12} (${utc.time24} UTC, ISO: ${now.toISOString()})
${localInfo && validUserTz ? `- User's Local Timezone (${validUserTz}): ${localInfo.fullDate} · ${localInfo.time12} (${localInfo.time24}, ${localInfo.offset})` : ''}
- Live Verified World Times:
${hubLines}
- IMPORTANT: Use this exact live clock data to answer ANY question about today's day, date, year, or current local time in ANY country or city worldwide. Never say you lack real-time clock access.`;
}

export function buildAllCountriesWorldClockMarkdown(userTimeZone?: string, isUrdu = false): string {
  const now = new Date();
  const utc = getFormattedZoneInfo(now, 'UTC');
  const validUserTz = isValidTimeZone(userTimeZone) ? userTimeZone : undefined;
  const localInfo = validUserTz ? getFormattedZoneInfo(now, validUserTz) : null;

  const regions: Array<CountryTimeEntry['region']> = [
    'Asia',
    'Middle East',
    'Europe',
    'North America',
    'Central America & Caribbean',
    'South America',
    'Africa',
    'Oceania',
  ];

  const lines: string[] = [];

  if (isUrdu) {
    lines.push(`### 📅 Aaj Ka Din aur Duniya Ke Har Mulk Ka Live Waqt (World Clock)`);
    lines.push('');
    lines.push(`- **Aaj Ka Din (UTC):** **${utc.fullDate}**`);
    lines.push(`- **Live UTC Waqt:** **${utc.time12}** (${utc.time24} UTC)`);
    if (localInfo && validUserTz) {
      lines.push(`- **Aapka Local Waqt (${validUserTz}):** **${localInfo.fullDate}** · **${localInfo.time12}** (${localInfo.offset})`);
    }
    lines.push('');
    lines.push(`Neeche duniya ke tamaam mumalik ka exact live din, tareekh aur waqt region ke hisaab se diya gaya hai:`);
  } else {
    lines.push(`### 📅 Today's Day & Live Time in Every Country Worldwide`);
    lines.push('');
    lines.push(`- **Day & Date Today (UTC):** **${utc.fullDate}**`);
    lines.push(`- **Current UTC Time:** **${utc.time12}** (${utc.time24} UTC)`);
    if (localInfo && validUserTz) {
      lines.push(`- **Your Local Time (${validUserTz}):** **${localInfo.fullDate}** · **${localInfo.time12}** (${localInfo.offset})`);
    }
  }

  for (const region of regions) {
    const entries = WORLD_COUNTRIES.filter((c) => c.region === region);
    if (entries.length === 0) continue;

    lines.push('');
    lines.push(`#### 🌍 ${region} (${entries.length})`);

    for (const entry of entries) {
      const info = getFormattedZoneInfo(now, entry.zone);
      const label = entry.note ? `${entry.country} _(${entry.note})_` : entry.country;
      lines.push(`- **${label}:** ${info.weekday}, ${info.shortDate} · **${info.time12}** (${info.time24}, \`${info.offset}\`)`);
    }
  }

  return lines.join('\n');
}

export function buildSpecificDayOrTimeFallback(message: string, userTimeZone?: string): string | null {
  const lower = (message || '').toLowerCase();
  const asksTime = /\b(time|clock|waqt)\b/i.test(lower);
  const asksDayOrDate = /\b(day\s+today|today('s)?\s+day|what\s+day\s+is\s+(it|today)|today('s)?\s+date|what\s+is\s+the\s+date|what\s+date\s+is\s+(it|today)|aaj\s+(kya\s+)?(din|tareekh|waqt))\b/i.test(lower);

  if (!asksTime && !asksDayOrDate) return null;

  const now = new Date();
  const utc = getFormattedZoneInfo(now, 'UTC');
  const validUserTz = isValidTimeZone(userTimeZone) ? userTimeZone : undefined;
  const localInfo = validUserTz ? getFormattedZoneInfo(now, validUserTz) : null;
  const mentioned = findMentionedCountries(message);

  if (mentioned.length > 0) {
    const rows = mentioned
      .map((m) => {
        const info = getFormattedZoneInfo(now, m.zone);
        return `- **${m.country}** (\`${m.zone}\`): **${info.fullDate}** · **${info.time12}** (${info.time24}, \`${info.offset}\`)`;
      })
      .join('\n');
    return `### 🕒 Live Day & Country Time\n\n${rows}\n\n- **Reference UTC:** ${utc.fullDate} · ${utc.time12} (${utc.time24} UTC)`;
  }

  if (asksDayOrDate || asksTime) {
    return `### 📅 Today's Day, Date & Live Time\n\n${
      localInfo && validUserTz
        ? `- **Your Local Time (${validUserTz}):** **${localInfo.fullDate}** · **${localInfo.time12}** (\`${localInfo.offset}\`)\n`
        : ''
    }- **UTC Time:** **${utc.fullDate}** · **${utc.time12}** (${utc.time24} UTC)`;
  }

  return null;
}
