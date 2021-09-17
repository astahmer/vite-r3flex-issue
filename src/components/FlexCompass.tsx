import { useEventListener } from "@chakra-ui/hooks";
import { useThree } from "@react-three/fiber";
import { Box, Flex } from "@react-three/flex";
import { useControls } from "leva";
import { useEffect, useState } from "react";

import { AppText, TextProvider } from "./AppText";

const defaultFontSize = 0.4;
export function FlexCompass() {
  const [key, setKey] = useState(0);
  const incrKey = () => setKey((current) => current + 1);

  // Refresh in case HMR broke it
  useEventListener("keypress", (e) => e.key === "r" && incrKey());

  const { viewport } = useThree();
  const { fontSize, scale } = useControls({
    fontSize: {
      min: 0.1,
      max: 3,
      step: 0.1,
      value: defaultFontSize,
    },
    scale: {
      min: 0.1,
      max: 3,
      step: 0.1,
      value: Math.min(1, (viewport.width / 16) * defaultFontSize),
    },
  });

  useEffect(() => incrKey(), [fontSize, scale]);

  return (
    <Flex
      key={key}
      flexDirection="column"
      alignItems="center"
      position={[1, 0, 0]}
      size={[3 * scale, 3 * scale, 0]}
      scale={[scale, scale, scale]}
    >
      <TextProvider
        fontSize={fontSize > 1 ? fontSize * 0.6 : fontSize}
        color="#010101"
        fillOpacity={0.8}
      >
        <Box dir="row" width="100%" height={scale / 2} justifyContent="center">
          <Box>
            <AppText bold>N</AppText>
          </Box>
        </Box>
        <Box
          dir="row"
          justifyContent="space-between"
          width={"100%"}
          height={scale}
          mt={0.3}
          mb={0.1}
        >
          <Box>
            <AppText>W</AppText>
          </Box>
          <Box margin="auto">
            <AppText>E</AppText>
          </Box>
        </Box>
        <Box dir="row" width="100%" height={scale / 2} justifyContent="center">
          <Box>
            <AppText>S</AppText>
          </Box>
        </Box>
      </TextProvider>
    </Flex>
  );
}

const Square = ({ color = "red" }) => (
  <mesh>
    <boxGeometry />
    <meshStandardMaterial color={color} />
  </mesh>
);
