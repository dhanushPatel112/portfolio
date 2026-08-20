import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Dhanush Patel — Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '80px',
                    background:
                        'linear-gradient(135deg, #0a0a0a 0%, #111827 55%, #1e293b 100%)',
                    color: '#ffffff',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        fontSize: 30,
                        letterSpacing: 6,
                        textTransform: 'uppercase',
                        color: '#38bdf8',
                        marginBottom: 24,
                    }}
                >
                    Portfolio
                </div>
                <div
                    style={{
                        fontSize: 96,
                        fontWeight: 800,
                        lineHeight: 1.05,
                    }}
                >
                    Dhanush Patel
                </div>
                <div
                    style={{
                        fontSize: 44,
                        fontWeight: 600,
                        marginTop: 16,
                        color: '#e2e8f0',
                    }}
                >
                    Full-Stack Developer
                </div>
                <div
                    style={{
                        fontSize: 28,
                        marginTop: 28,
                        color: '#94a3b8',
                    }}
                >
                    Node.js · NestJS · React · Next.js · AWS
                </div>
            </div>
        ),
        { ...size },
    );
}
